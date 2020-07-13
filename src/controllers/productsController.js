const path = require('path');
const fs = require('fs');




const productsController = {
    productShow: function (req, res) {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')));
         let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
         let subCategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));
         let subcategoriaId = req.params.category;
         let fromCategory = subCategoriasActuales.find(subcategoria => subcategoria.id_subcategoria == subcategoriaId);
         let productId = req.params.id;
         let productToShow = productos.find(producto => producto.id == productId);
        res.render(path.resolve(__dirname, '../views/products/productShow'), { productToShow, fromCategory, Title: fromCategory + productToShow.marca + ' ' + productToShow.modelo });
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
        let categoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));

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

        let subcategorias = subcategoria.sort(function (a, b) {
            if (a.subcategoria > b.subcategoria) {
                return 1;
            }
            if (a.subcategoria < b.subcategoria) {
                return -1;
            }
            // a debe ser igual a b
            return 0;
        });


        res.render(path.resolve(__dirname, '../views/products/productsCRUD'), { Title: 'Productos', productos: productos, categorias: categorias, subcategorias: subcategorias });
    },
    // MM agrega desde acá
    add: function (req, res) {
        let categoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));

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

        let subcategorias = subcategoria.sort(function (a, b) {
            if (a.subcategoria > b.subcategoria) {
                return 1;
            }
            if (a.subcategoria < b.subcategoria) {
                return -1;
            }
            // a debe ser igual a b
            return 0;
        });

        res.render(path.resolve(__dirname, '../views/products/productsCRUD-add'), { Title: 'Productos', categorias: categorias, subcategorias:subcategorias } );
    },
    // MM hasta acá

    save: function (req, res) {
        
        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoUltimo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))

        productoUltimo = productoUltimo.pop();

        let productoNuevo = {
            id: productoUltimo.id + 1,
            id_subcategoria : req.body.subcategoria,
            marca: req.body.marca,
            modelo: req.body.modelo,
            descripcion: req.body.descripcion,
            color:req.body.color,
            precio: req.body.precio,
            talle: [
                37,
                38,
                39,
                42,
                44,
                45,
                46
            ],
            images: ["accesories/iAcc/iFrame_908170_FSK_Frame_Pleasure_Tool_SC_110_246mm_3x110_red_2016_view1_xxl"]
            

        }


        productosActuales.push(productoNuevo);

        let productoJSON = JSON.stringify(productosActuales,null,2)

        fs.writeFileSync(path.resolve(__dirname, '../models/productos.json'), productoJSON)
        res.redirect('/products/crud');

    },
    show: function (req, res) {

        let categoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));


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
        let subcategorias = subcategoria.sort(function (a, b) {
            if (a.subcategoria > b.subcategoria) {
                return 1;
            }
            if (a.subcategoria < b.subcategoria) {
                return -1;
            }
            // a debe ser igual a b
            return 0;
        });



        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoId = req.params.id;
        const productoShow = productosActuales.find(producto => producto.id == productoId);
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'productsCRUD-detail'), { productoShow: productoShow,categorias:categorias,subcategorias:subcategorias, Title: 'Producto-Visualizar' })

    },
    edit: function (req, res) {
        
        let categoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));
    
    
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
        let subcategorias = subcategoria.sort(function (a, b) {
            if (a.subcategoria > b.subcategoria) {
                return 1;
            }
            if (a.subcategoria < b.subcategoria) {
                return -1;
            }
            // a debe ser igual a b
            return 0;
        });


        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoId = req.params.id;
        const productoEdit = productosActuales.find(producto => producto.id == productoId);
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'productsCRUD-edit'), { productoEdit: productoEdit, Title: 'Producto-Edición',categorias:categorias,subcategorias:subcategorias })

    },
    update: function (req, res) {

        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        req.body.id = req.params.id;
        let productoUpdate = productosActuales.map(producto => {    //id nombre descripcion precio imagen
            if (producto.id == req.body.id) {
                producto.id_subcategoria = Number(req.body.subcategoria),
                producto.marca = req.body.marca,
                producto.modelo = req.body.modelo,
                producto.descripcion = req.body.descripcion,
                producto.color = req.body.color,
                producto.precio= req.body.precio,
                producto.images= ["accesories/iAcc/iFrame_908170_FSK_Frame_Pleasure_Tool_SC_110_246mm_3x110_red_2016_view1_xxl"]                
              
                //return producto = req.body;
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