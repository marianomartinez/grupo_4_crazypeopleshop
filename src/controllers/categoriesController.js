const path = require('path');
const fs = require('fs');



const categoriesController = {
    showCategory: function (req, res) {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')));
        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let categoriaId = req.params.id;
        let categoriaShow = categoriasActuales.find(categoria => categoria.id == categoriaId);
        const galleryShow = productos.filter(producto => Number(producto.categoria) == categoriaId);

        //res.sendFile(path.resolve(__dirname, '../views/products/category.html'));
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
        const categoriaShow = categoriasActuales.find(categoria => categoria.id == categoriaId);
        res.render(path.resolve(__dirname, '..', 'views', 'categories', 'categoriesCRUD_display'), { categoriaShow: categoriaShow, Title: 'Categoría-Visualizar' })

    },
    add: function (req, res) {
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))
        res.render(path.resolve(__dirname, '../views/categories/categoriesCRUD_add'), {
            Title: 'Categorías',
            categorias: categorias
        });
    },
    save: function (req, res) {



        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))
        let categoriaUltimo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))

        categoriaUltimo = categoriaUltimo.pop();




        let categoriaNuevo = {
            id: categoriaUltimo.id + 1,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            imagen: req.file ? req.file.filename : ""
        }

        categoriasActuales.push(categoriaNuevo);

        let categoriaJSON = JSON.stringify(categoriasActuales, null, 2)

        fs.writeFileSync(path.resolve(__dirname, '../models/categorias.json'), categoriaJSON)
        res.redirect('/categories/crud');

    },

}
module.exports = categoriesController;