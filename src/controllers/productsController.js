const path = require('path');
const fs = require('fs');



const productsController = {

    productDetail: function (req, res) {
        // res.sendFile(path.resolve(__dirname, '../views/products/productDetail.html'));
        res.render(path.resolve(__dirname, '../views/products/productDetail'), { Title: 'Detalle de producto' });
    },
    crud: function (req, res) {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        res.render(path.resolve(__dirname, '../views/products/productsCRUD'), { Title: 'Productos', productos: productos });
    },
    register: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/users/register.html'));
        res.render(path.resolve(__dirname, '../views/products/register'), { Title: 'Productos'});
    },
    save: function (req, res) {
        
        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoUltimo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))

        productoUltimo = productoUltimo.pop();

        let productoNuevo = {
            id: productoUltimo.id + 1,
            marca: req.body.marca,
            modelo: req.body.modelo,
            descripcion: req.body.descripcion,
            talle: req.body.talle,
            color:req.body.color,
            precio: req.body.precio

        }


        productosActuales.push(productoNuevo);

        let productoJSON = JSON.stringify(productosActuales)

        fs.writeFileSync(path.resolve(__dirname, '../models/productos.json'), productoJSON)
        res.redirect('/products/crud');

    },
    show: function (req, res) {

        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoId = req.params.id;
        const productoShow = productosActuales.find(producto => producto.id == productoId);
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'detail'), { productoShow: productoShow, Title: 'Producto-Visualizar' })

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

        let productoJSON = JSON.stringify(productosNuevos)
        fs.writeFileSync(path.resolve(__dirname, '../models/productos.json'), productoJSON)
        res.redirect('/products/crud');
    },



}
module.exports = productsController;