const path = require('path');
const fs = require('fs');




const productsController = {
    productShow: function (req, res) {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')));
         let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
         let categoriaId = req.params.category;
         let fromCategory = categoriasActuales.find(categoria => categoria.id == categoriaId);
         let productId = req.params.id;
         let productToShow = productos.find(producto => producto.id == productId);
         res.render(path.resolve(__dirname, '../views/products/productShow'), {productToShow, fromCategory , Title: productToShow.marca + ' ' + productToShow.modelo });
     },

    // El controlador de abajo fue reemplazado por "productShow"
    /*
    productDetail: function (req, res) {
        // res.sendFile(path.resolve(__dirname, '../views/products/productDetail.html'));
        res.render(path.resolve(__dirname, '../views/products/productDetail'), { Title: 'Detalle de producto' });
    },
    */

    crud: function (req, res) {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        res.render(path.resolve(__dirname, '../views/products/productsCRUD'), { Title: 'Productos', productos: productos,categorias:categorias });
    },
    // MM agrega desde acá
    add: function (req, res) {
        let categoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));

        let categorias = categoria.sort(function (a, b) {
            if (a.categoria > b.categoria) {
                return 1;
            }
            if (a.categoria < b.categoria) {
                return -1;
            }
            // a debe ser igual a b
            return 0;
        });
        res.render(path.resolve(__dirname, '../views/products/productsCRUD-add'), { Title: 'Productos', categorias: categorias } );
    },
    // MM hasta acá

    save: function (req, res) {
        
        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoUltimo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))

        productoUltimo = productoUltimo.pop();

        let productoNuevo = {
            id: productoUltimo.id + 1,
            categoria : req.body.categoria,
            marca: req.body.marca,
            modelo: req.body.modelo,
            descripcion: req.body.descripcion,
            talle: req.body.talle,
            color:req.body.color,
            precio: req.body.precio

        }


        productosActuales.push(productoNuevo);

        let productoJSON = JSON.stringify(productosActuales,null,2)

        fs.writeFileSync(path.resolve(__dirname, '../models/productos.json'), productoJSON)
        res.redirect('/products/crud');

    },
    show: function (req, res) {

        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoId = req.params.id;
        const productoShow = productosActuales.find(producto => producto.id == productoId);
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'productsCRUD-detail'), { productoShow: productoShow, Title: 'Producto-Visualizar' })

    },
    edit: function (req, res) {

        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoId = req.params.id;
        const productoEdit = productosActuales.find(producto => producto.id == productoId);
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'edit'), { productoEdit: productoEdit, Title: 'Producto-Edición' })

    },
    update: function (req, res) {

        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        req.body.id = req.params.id;
        let productoUpdate = productosActuales.map(producto => {    //id nombre descripcion precio imagen
            if (producto.id == req.body.id) {
                return producto = req.body;
            }
            return producto;
        });
        productoJSON = JSON.stringify(productoUpdate, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../models/productos.json'), productoJSON);
        res.redirect('/products/crud');

    } ,
    delete: function (req, res) {

        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoId = req.params.id;
        const productosNuevos = productosActuales.filter(producto => producto.id != productoId)

        let productoJSON = JSON.stringify(productosNuevos, null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../models/productos.json'), productoJSON)
        res.redirect('/products/crud');
    },



}
module.exports = productsController;