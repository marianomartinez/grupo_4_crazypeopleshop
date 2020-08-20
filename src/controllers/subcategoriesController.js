const path = require('path');
const fs = require('fs');
const db = require('../database/models/')

const Product = db.Product;
const Subcategory = db.Subcategory;
const Category = db.Category;
//Express validator
let { check, validationResult, body } = require('express-validator');



const subcategoriesController = {
    
    crud: function (req, res) {

        let subcatProm = Subcategory.findAll({include: [{ association: "category" }]});
        let catProm = Category.findAll();
        Promise.all([subcatProm, catProm])
            .then(([subcategorias, categorias])=> {
                res.render(path.resolve(__dirname, '../views/subcategories/subcategoriesCRUD'), { Title: 'Subcategorias', subcategorias, categorias });
            })
            .catch(error => res.send(error))
       

    },
    show: function (req, res) {

        Subcategory
            .findByPk(req.params.id, {
                include: [{ association: "category" }]
            })
            .then(subcategoriaShow => {
                res.render(path.resolve(__dirname, '..', 'views', 'subcategories', 'subcategoriesCRUD_display'), { subcategoriaShow: subcategoriaShow, Title: 'Categoría-Visualizar' })
            })

    },
    add: function (req, res) {
        Category
            .findAll()
            .then(categorias => {
                res.render(path.resolve(__dirname, '..', 'views', 'subcategories', 'subcategoriesCRUD_add'), { categorias: categorias, Title: 'Subcategoria-Crear' })
            }).catch(error => res.send(error))


    },
    delete: function (req, res) {

        Subcategory
            .destroy({
                where: {
                    id: req.params.id
                },
                force: true
            }).then(confirm => {
                res.redirect('/subcategories/crud');
            })
    },
    save: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const _body = req.body
            _body.categoryId = req.body.categoria
          //  _body.image = req.file ? req.file.filename : 'categoriavacia.jpg'
            Subcategory
                .create(_body)
                .then(subcategoria => {
                    res.redirect('/subcategories/crud');
                })

        }
        else {
            console.log(req.body);
            Category
                .findAll()
                .then(categorias => {
                    res.render(path.resolve(__dirname, '..', 'views', 'subcategories', 'subcategoriesCRUD_add'),
                        {
                            Title: 'Nueva Subcategoría',
                            errors: errors.mapped(),
                            old: req.body,
                            categorias: categorias
                        })
                })

            }  
    },
    edit: function (req, res) {
       
        let Querycategorias = Category.findAll();
        let QuerysubcategoriaEdit = Subcategory.findByPk(req.params.id)

        Promise.all([Querycategorias, QuerysubcategoriaEdit])
            .then(function ([categorias, subcategoriaEdit]) {
                res.render(path.resolve(__dirname, '..', 'views', 'subcategories', 'subcategoriesCRUD_edit'), { categorias: categorias, subcategoriaEdit: subcategoriaEdit, Title: 'Subcategoria-Editar' })

            }

            )
    },
    update: function (req, res) {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const _body = req.body
            _body.categoryId = req.body.categoria
            _body.image = req.file ? req.file.filename : req.body.image_old
            Subcategory
                .update(_body, {
                    where: { id: req.params.id }
                })
                .then(subcategoria => {
                    res.redirect('/subcategories/crud');
                })

        }
        else {
            req.body.id = req.params.id
            
            Category
                .findAll()
                .then(categorias => {
                    res.render(path.resolve(__dirname, '..', 'views', 'subcategories', 'subcategoriesCRUD_edit'), { categorias: categorias,subcategoriaEdit : req.body, Title: 'Categoria-Edición', errors: errors.mapped() })
                }).catch(error => res.send(error))
        }
    },
    allSubcategories: async (req,res) => {return res.json(await Subcategory.findAll({where: {categoryId: req.params.id}}))
    }
}
module.exports = subcategoriesController;