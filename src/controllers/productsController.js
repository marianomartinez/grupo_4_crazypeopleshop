const path = require('path');
const fs = require('fs');
const product = require('../database/models/product');
const db = require('../database/models/')

const Category = db.Category;
const Subcategory = db.Subcategory;
const Product = db.Product;
const ProductSizeStock = db.ProductSizeStock;
const Size = db.Size;
const Image = db.Image;
const ProductImage = db.ProductImage

const { Op } = require("sequelize");


//Express validator
let { check, validationResult, body } = require('express-validator');

const productsController = {
    productShow: function (req, res) {
        /*
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')));
        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subCategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));
        let subcategoriaId = req.params.category;
        let fromCategory = subCategoriasActuales.find(subcategoria => subcategoria.id == subcategoriaId);
        let productId = req.params.id;
        let productToShow = productos.find(producto => producto.id == productId);
        res.render(path.resolve(__dirname, '../views/products/productShow'), { productToShow, fromCategory, Title: productToShow.marca + ' ' + productToShow.modelo });
        */

        Product.findByPk(req.params.id, {include: ['subcategory','images','sizes']})
        .then(productToShow => {
            // return res.send(productToShow)
            return res.render(path.resolve(__dirname, '../views/products/productShow'), { productToShow, Title: productToShow.brand + ' ' + productToShow.model })
        })
    },

    // El controlador de abajo fue reemplazado por "productShow"
    /*
    productDetail: function (req, res) {
        // res.sendFile(path.resolve(__dirname, '../views/products/productDetail.html'));
        res.render(path.resolve(__dirname, '../views/products/productDetail'), { Title: 'Detalle de producto' });
    },
    */

    crud: function (req, res) {
        
        /*
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
        
        res.render(path.resolve(__dirname, '../views/products/productsCRUD'), { Title: 'Admin-Productos', productos: productos, categorias: categorias, subcategorias: subcategorias });
        */

        let productsProm = Product.findAll({include: ['subcategory']});
        let categoryProm = Category.findAll();
        let subcategoryProm = Subcategory.findAll();
        Promise.all([productsProm, categoryProm, subcategoryProm])
        .then(([products,categories,subcategories]) => {
            // return res.send(products);
            return res.render(path.resolve(__dirname, '../views/products/productsCRUD'), {
            Title: 'Admin-Productos',
            products,categories,subcategories
        })})

    },
    
    add: function (req, res) {
        // let categoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        // let subcategoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));

        let categoryProm = Category.findAll();
        let subcategoryProm = Subcategory.findAll();
        Promise.all([categoryProm, subcategoryProm])
        .then(([allCat,allSubcat]) => {
            let categorias = allCat.sort(function (a, b) {
                if (a.categoria > b.categoria) {return 1;}
                if (a.categoria < b.categoria) {return -1;}
                // a debe ser igual a b
                return 0;
            });
    
            let subcategorias = allSubcat.sort(function (a, b) {
                if (a.subcategoria > b.subcategoria) {return 1;}
                if (a.subcategoria < b.subcategoria) {return -1;}
                // a debe ser igual a b
                return 0;
            });
            res.render(path.resolve(__dirname, '../views/products/productsCRUD-add'), {Title: 'Producto-Crear', categorias, subcategorias});
        })
    },

    save: function (req, res) {
        
        /*
        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoUltimo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        productoUltimo = productoUltimo.pop();
        let productoNuevo = {
            id: productoUltimo.id + 1,
            id_categoria : req.body.categoria,
            id_subcategoria : req.body.subcategoria,
            marca: req.body.marca,
            modelo: req.body.modelo,
            descripcion: req.body.descripcion,
            color:req.body.color,
            precio: req.body.precio,
            talle: [37,38,39,42,44,45,46],
            images: ["accesories/iAcc/iFrame_908170_FSK_Frame_Pleasure_Tool_SC_110_246mm_3x110_red_2016_view1_xxl"]
        }
        productosActuales.push(productoNuevo);
        let productoJSON = JSON.stringify(productosActuales,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../models/productos.json'), productoJSON)
        res.redirect('/products/crud');
        */

        let newProduct = {
            model: req.body.model,
            brand: req.body.brand,
            price: req.body.price,
            discount: req.body.discount,
            show: 0,
            subcategoryId: req.body.subcategoryId,
            description: req.body.description
        }
        Product.create(newProduct)
        .then((prod)=>{
            let newImages = req.files.map(each=> each.filename);
            newImages.forEach(img=>{
                let newImage = {filename: img};
                Image.create(newImage)
                .then(async(img)=>{
                    let newRel = {
                        productId: prod.id,
                        imageId: img.id
                    }
                    await ProductImage.create(newRel)
                })
            })
        })
        return res.redirect('/products/crud')
    },

    show: function (req, res) {
        /*
        let categoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));
        let categorias = categoria.sort(function (a, b) {
            if (a.categoria > b.categoria) {return 1;}
            if (a.categoria < b.categoria) {return -1;}
            // a debe ser igual a b
            return 0;
        });
        let subcategorias = subcategoria.sort(function (a, b) {
            if (a.subcategoria > b.subcategoria) {return 1;}
            if (a.subcategoria < b.subcategoria) {return -1;}
            // a debe ser igual a b
            return 0;
        });
        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoId = req.params.id;
        const productoShow = productosActuales.find(producto => producto.id == productoId);
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'productsCRUD-detail'), { productoShow: productoShow,categorias:categorias,subcategorias:subcategorias, Title: 'Producto-Visualizar' })
        */
        
        let promSizeStock = ProductSizeStock.findAll({where: {productId: req.params.id}});
        let promSizes = Size.findAll();
        let productProm = Product.findByPk(req.params.id, {include: ['subcategory','images']});
        let categoriesProm = Category.findAll({include: 'subcategory'});
        let subcategoriesProm = Subcategory.findAll({include: 'category'});
        Promise.all([promSizeStock, promSizes, productProm, categoriesProm, subcategoriesProm])
        .then(([sizeStock, sizes, productoShow, categorias, subcategorias]) => {
            return res.render(path.resolve(__dirname, '../views/products/productsCRUD-detail'), {Title: 'Producto-Detalle',sizeStock,sizes,productoShow,categorias,subcategorias})})
    },

    edit: function (req, res) {
        /*
        let categoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategoria = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));
    
        let categorias = categoria.sort(function (a, b) {
            if (a.categoria > b.categoria) {return 1;}
            if (a.categoria < b.categoria) {return -1;}
            // a debe ser igual a b
            return 0;
        });
        let subcategorias = subcategoria.sort(function (a, b) {
            if (a.subcategoria > b.subcategoria) {return 1;}
            if (a.subcategoria < b.subcategoria) {return -1;}
            // a debe ser igual a b
            return 0;
        });

        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoId = req.params.id;
        const productoEdit = productosActuales.find(producto => producto.id == productoId);
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'productsCRUD-edit'), { productoEdit: productoEdit, Title: 'Producto-Editar',categorias:categorias,subcategorias:subcategorias })
        */

        let promSizeStock = ProductSizeStock.findAll({where: {productId: req.params.id}});
        let promSizes = Size.findAll();
        let categoryProm = Category.findAll();
        let subcategoryProm = Subcategory.findAll();
        let productProm = Product.findByPk(req.params.id, {include: ['subcategory','images']})
        Promise.all([promSizeStock, promSizes, categoryProm, subcategoryProm, productProm])
        .then(([sizeStock, sizes, allCat, allSubcat, productoEdit]) => {
            let categorias = allCat.sort(function (a, b) {
                if (a.categoria > b.categoria) {return 1;}
                if (a.categoria < b.categoria) {return -1;}
                // a debe ser igual a b
                return 0;
            });
    
            let subcategorias = allSubcat.sort(function (a, b) {
                if (a.subcategoria > b.subcategoria) {return 1;}
                if (a.subcategoria < b.subcategoria) {return -1;}
                // a debe ser igual a b
                return 0;
            });
            res.render(path.resolve(__dirname, '..', 'views', 'products', 'productsCRUD-edit'), { productoEdit, Title: 'Producto-Editar', sizeStock, sizes, categorias, subcategorias })
        })
    },
    update: function (req, res) {
        /*
        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        req.body.id = req.params.id;
        let productoUpdate = productosActuales.map(producto => {    //id nombre descripcion precio imagen
            if (producto.id == req.body.id) {
                producto.id_categoria = Number(req.body.categoria),
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
        */


        /* // Sin validación funciona
        let updateProduct = {
            model: req.body.model,
            brand: req.body.brand,
            price: req.body.price,
            discount: req.body.discount,
            show: req.body.show,
            subcategoryId: req.body.subcategoryId,
            description: req.body.description
        }
        if(req.body.relId != undefined){
            let updateSizeStock = {
                productId: req.params.id,
                sizeId: req.body.size,
                stock: req.body.stock
            }
            ProductSizeStock.update(updateSizeStock,{where: {id: req.body.relId}})
            .then(()=>{})
        };
        Product.update(updateProduct, {where: {id: req.params.id}})
        .then(() => res.redirect('/products/productsCRUDdetail/' + req.params.id)) 
        */



        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let updateProduct = {
                model: req.body.model,
                brand: req.body.brand,
                price: req.body.price,
                discount: req.body.discount,
                show: req.body.show,
                subcategoryId: req.body.subcategoryId,
                description: req.body.description
            }
            if(req.body.relId != undefined){
                let updateSizeStock = {
                    productId: req.params.id,
                    sizeId: req.body.size,
                    stock: req.body.stock
                }
                ProductSizeStock.update(updateSizeStock,{where: {id: req.body.relId}})
                .then(()=>{})
            };
            Product.update(updateProduct, {where: {id: req.params.id}})
            .then(() => res.redirect('/products/productsCRUDdetail/' + req.params.id))  
        } else {
            res.redirect('/products/productsCRUDedit/' + req.params.id);
        }
    } ,
    delete: function (req, res) {
        /*
        let productosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')))
        let productoId = req.params.id;
        const productosNuevos = productosActuales.filter(producto => producto.id != productoId)
        let productoJSON = JSON.stringify(productosNuevos, null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../models/productos.json'), productoJSON)
        res.redirect('/products/crud');*/
        
        
        let prodProm = Product.findByPk(req.params.id);
        let relProm = ProductImage.findAll({where: {productId: req.params.id}})
        Promise.all([prodProm,relProm])
        .then(([prod,rels])=>{
            let producto = prod;
            let relations = rels;
            if(relations.length > 0){
                relations.forEach(rel=>{
                Image.findAll({where: {id: rel.id}})
                .then(async imgs=>{
                    let imagenes = imgs;
                    imagenes.forEach(imagen=>{
                        ProductImage.destroy({where: {imageId: imagen.id}})
                        .then(()=>{Image.destroy({where: {id: imagen.id}})})
                    })
                    await Product.destroy({where: {id: req.params.id}})
                })
            })
            return res.redirect('/products/crud')
            } else {Product.destroy({where: {id: req.params.id}}).then(()=> res.redirect('/products/crud'))}
        })
    },
    productSearch: function(req,res){
        let search = req.query.searchInput.toLowerCase();
        Product
        .findAll({where: {[Op.or]: [{model: {[Op.like]: `%${search}%`}},{brand: {[Op.like]: `%${search}%`}}]}, include: ['images']})
        .then(results => {return res.render(path.resolve(__dirname, '..','views','categories','searchResultsShow'), {results, Title: 'Resultados'})})
        .catch(error => res.send(error))
    },
    productEdit: async (req,res) => {return res.json(await Product.findAll({where: {id: req.params.id}},{include: ['subcategory','sizes']}))
    },
    productSizes: async (req,res) => {return res.json(await ProductSizeStock.findAll({where: {productId: req.params.id}}))
    }
}

module.exports = productsController;