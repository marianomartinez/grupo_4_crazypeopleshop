const path =require("path")
const db = require('../database/models/')
const Product = db.Product;
const Cart = db.Cart;
const Item = db.Item;
const User = db.User;

//Express validator
let { check, validationResult, body } = require('express-validator');

module.exports= {
   
    additemCart: (req,res)=>{

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            Product.findByPk(req.body.producto,{
                include: ['subcategory','images'],
        
               
            })
            .then(productos=>{
                
                let price = productos.discount > 0 ?
                Number(productos.price) * ((100 - productos.discount) / 100) : Number(productos.price)
                
                //Creao los items
               return Item.create({
                    grossPrice: productos.price,    
                    netPrice: price,
                    quantity: req.body.cantidad,
                   discount: productos.discount,
                    subtotal: req.body.cantidad * price,
                    status: 1,
                    sizeId: req.body.talle,
                    userId: req.session.usuarioLogueado.id,
                    productId: productos.id,
                    cartId: null
                }).then(item => res.redirect('/category/'+ req.body.categoria))
                    .catch(error => console.log(error)) 
            

            })
        
        }
        
        else {

            console.log(req.body.producto)
            Product.findByPk(req.body.producto, { include: ['subcategory', 'images', 'sizes'] })
                .then(productToShow => {
                    // return res.send(productToShow)
                    res.render(path.resolve(__dirname, '../views/products/productShow'), { productToShow, Title: productToShow.brand + ' ' + productToShow.model, errors:errors.mapped() })
                }).catch (error => res.send(error))

        
        }
        
    },
    cart: (req, res) => {
        Item.findAll({
            where: {
                status: 1,
                userId: req.session.usuarioLogueado.id
            },
            include: {
                all: true,
                nested: true
            }
        })
            .then((items) => {
                let total = items.reduce((total, item) => (total = total + Number(item.subtotal)), 0)
               
                res.render(path.resolve(__dirname, '..', 'views', 'checkout', 'cart'), {Title : 'Carrito', cartProducto: items, total });
            })

    },
    
}