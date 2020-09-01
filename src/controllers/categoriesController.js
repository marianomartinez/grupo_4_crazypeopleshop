const path = require('path');
const fs = require('fs');
const db = require('../database/models/')

const Category = db.Category;
const Subcategory = db.Subcategory;
const Product = db.Product;


//Express validator
let { check, validationResult, body } = require('express-validator');



const categoriesController = {
    showCategory: function (req, res) {
        // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')));
        // let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        // let subcategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));

        // let categoriaId = req.params.id;
        // let categoriaShow = categoriasActuales.find(categoria => categoria.id_categoria == categoriaId);
        // let subCategorias = subcategoriasActuales.filter(subcategoria => subcategoria.id_categoria == categoriaId);
        
        // //const galleryShow = productos.filter(producto => producto.id_subcategoria == subCategorias.id);
        // let galleryShow = [];
        // productos.forEach(producto => {
        //     for (i = 0; i < subCategorias.length; i++){
        //         if(producto.id_subcategoria == subCategorias[i].id){
        //             galleryShow.push(producto)
                    
        //         }
        //     }    
        // });
        
        // MM Usábamos el método de abajo con base en JSON
        /*
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')));
        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));

        let categoriaId = req.params.id;
        let categoriaShow = categoriasActuales.find(categoria => categoria.id_categoria == categoriaId);
        let subCategorias = subcategoriasActuales.filter(subcategoria => subcategoria.id_categoria == categoriaId);

        //const galleryShow = productos.filter(producto => producto.id_subcategoria == subCategorias.id);
        let galleryShow = [];
        productos.forEach(producto => {
            if (producto.id_categoria == categoriaShow.id_categoria) {
                galleryShow.push(producto)
            }
        });
        
        res.render(path.resolve(__dirname, '../views/categories/categoryShow'), {productos: productos, galleryShow: galleryShow,Title: categoriaShow.categoria});
        */

        Category.findByPk(req.params.id, {include: 'subcategory'})
        .then(selectedCategory => {
            Product.findAll(/*{where: {show: 1}},*/{include: ['subcategory','images']}) // !!! si pongo el filtro show:1, gallery show no tiene nada
            .then(results => {
                // return res.send(results)
                let galleryShow = results.filter(product => 
                    product.subcategory.categoryId == selectedCategory.id
                    )
                return res.render(path.resolve(__dirname, '../views/categories/categoryShow'), {galleryShow, Title: selectedCategory.name})
            })
            .catch(error => res.send(error))
        })

        // Product.findByPk(req.params.id, {include: 'images'})
        // .then(product=> {
        //     return res.send(product)
        // })


        // .findAll({include: 'images'})
        // .then(galleryShow => {
        //     return res.send(galleryShow);
        //     return res.render(path.resolve(__dirname, '../views/categories/categoryShow'), {galleryShow, Title: selectedCategory})
        // })
    },
    crud: function (req, res) {
        Category.findAll()
            .then(categorias => {
                res.render(path.resolve(__dirname, '../views/categories/categoriesCRUD'), { Title: 'Admin-Categorias', categorias: categorias });
 })
            .catch(error => res.send(error))

    },
    show: function (req, res) {

        Category
            .findByPk(req.params.id)
            .then(categoriaShow => {
                res.render(path.resolve(__dirname, '..', 'views', 'categories', 'categoriesCRUD_display'), { categoriaShow: categoriaShow, Title: 'Categoría-Visualizar' })
 })

    },
    add: function (req, res) {
        res.render(path.resolve(__dirname, '../views/categories/categoriesCRUD_add'), {
            Title: 'Categoría-Crear'
                });
    },
    delete: function (req, res) {

        Category
            .destroy({
                where: {
                    id: req.params.id
                },
                force: true
            }).then(confirm => {
                res.redirect('/categories/crud');
            })
    },
    save: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const _body = req.body
            _body.image = req.file ? req.file.filename : 'categoriavacia.jpg'
            Category
                .create(_body)
                .then(categoria => {
                    res.redirect('/categories/crud');
                })

        }
        else {

            return res.render(path.resolve(__dirname, '../views/categories/categoriesCRUD_add'),
                {
                    Title: 'Nueva Categoría',
                    errors: errors.mapped(),
                    old: req.body
                });

        }

    },
    edit: function (req, res) {
        Category
            .findByPk(req.params.id)
            .then(categoriaEdit => {
                res.render(path.resolve(__dirname, '..', 'views', 'categories', 'categoriesCRUD_edit'), { categoriaEdit: categoriaEdit, Title: 'Categoria-Editar' })

            })

    },
    update: function (req, res) {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const _body = req.body
              _body.image = req.file ? req.file.filename : req.body.image_old
            Category
                .update(_body, {
                    where: { id: req.params.id }
                })
                .then(categoria => {
                    res.redirect('/categories/crud');
                })

        }
        else {

            Category
                .findByPk(req.params.id)
                .then(categoriaEdit => {
                    res.render(path.resolve(__dirname, '..', 'views', 'categories', 'categoriesCRUD_edit'), { categoriaEdit: categoriaEdit, Title: 'Categoria-Edición', errors: errors.mapped() })
                })
        }
    },
    allCategories: async (req, res) => {return res.json(await Category.findAll({where: {subcategoryId: req.params.id}}))
    }
}
module.exports = categoriesController;