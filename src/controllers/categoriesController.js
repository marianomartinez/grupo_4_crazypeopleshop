const path = require('path');
const fs = require('fs');



const categoriesController = {
    showCategory: function (req, res) {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')));
        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));

        let categoriaId = req.params.id;
        let categoriaShow = categoriasActuales.find(categoria => categoria.id_categoria == categoriaId);
        let subCategorias = subcategoriasActuales.filter(subcategoria => subcategoria.id_categoria == categoriaId);
        
        //const galleryShow = productos.filter(producto => producto.id_subcategoria == subCategorias.id_subcategoria);
        let galleryShow = [];
        productos.forEach(producto => {
            for (i = 0; i < subCategorias.length; i++){
                if(producto.id_subcategoria == subCategorias[i].id_subcategoria){
                    galleryShow.push(producto)
                    
                }
            }    
        });
        
        res.render(path.resolve(__dirname, '../views/categories/categoryShow'), {productos: productos, galleryShow: galleryShow,Title: categoriaShow.categoria});
    },

    // Los 3 controladores de abajo fueron reemplazados por el de arriba
    /*showCategoryISkates: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/products/category.html'));
        res.render(path.resolve(__dirname, '../views/products/CategoryISkates'), {
            Title: 'Categorías'
        });
    },
    showCategoryQSkates: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/products/category.html'));
        res.render(path.resolve(__dirname, '../views/products/CategoryQSkates'), {
            Title: 'Categorías'
        });
    },
    showCategoryAccesories: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/products/category.html'));
        res.render(path.resolve(__dirname, '../views/products/CategoryAccesories'), {
            Title: 'Categorías'
        });
    },
    */

    crud: function (req, res) {
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))
        res.render(path.resolve(__dirname, '../views/categories/categoriesCRUD'), { Title: 'Categorias', categorias: categorias });
    },
    show: function (req, res) {

        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))
        let categoriaId = req.params.id;
        const categoriaShow = categoriasActuales.find(categoria => categoria.id_categoria == categoriaId);
        res.render(path.resolve(__dirname, '..', 'views', 'categories', 'categoriesCRUD_display'), { categoriaShow: categoriaShow, Title: 'Categoría-Visualizar' })

    },
    add: function (req, res) {
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))
        res.render(path.resolve(__dirname, '../views/categories/categoriesCRUD_add'), {
            Title: 'Categorías',
            categorias: categorias
        });
    },
    delete: function (req, res) {

        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))
        let categoriaId = req.params.id;
        const categoriasNuevos = categoriasActuales.filter(categoria => categoria.id_categoria != categoriaId)

        let categoriasJSON = JSON.stringify(categoriasNuevos, null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../models/categorias.json'), categoriasJSON)
        res.redirect('/categories/crud');
    },
    save: function (req, res) {



        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))
        let categoriaUltimo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))

        categoriaUltimo = categoriaUltimo.pop();




        let categoriaNuevo = {
            id_categoria: categoriaUltimo.id_categoria + 1,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            imagen: req.file ? req.file.filename : ""
        }

        categoriasActuales.push(categoriaNuevo);

        let categoriaJSON = JSON.stringify(categoriasActuales, null, 2)

        fs.writeFileSync(path.resolve(__dirname, '../models/categorias.json'), categoriaJSON)
        res.redirect('/categories/crud');

    },
    edit: function (req, res) {

        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))
        let categoriaId = req.params.id;
        const categoriaEdit = categoriasActuales.find(categoria => categoria.id_categoria == categoriaId);
        res.render(path.resolve(__dirname, '..', 'views', 'categories', 'categoriesCRUD_edit'), { categoriaEdit: categoriaEdit, Title: 'Categoria-Edición'})

    },
    update: function (req, res) {

        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))
        req.body.id = req.params.id;
        let categoriaUpdate = categoriasActuales.map(categoria => {    //id nombre descripcion precio imagen
            if (categoria.id_categoria == req.body.id) {
                categoria.categoria = req.body.categoria,
                categoria.descripcion = req.body.descripcion,
                categoria.imagen = req.file ? req.file.filename : ""

                //return producto = req.body;
            }
            return categoria;
        });
        categoriaJSON = JSON.stringify(categoriaUpdate, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../models/categorias.json'), categoriaJSON);
        res.redirect('/categories/crud');

    }

}
module.exports = categoriesController;