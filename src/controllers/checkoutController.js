const path =require("path")
const db = require('../database/models/')
const Product = db.Product;
const Cart = db.Cart;
const Item = db.Item;
const User = db.User;

//Express validator
let { check, validationResult, body } = require('express-validator');

module.exports= {
    index:(req,res)=>{
        res.render(path.resolve(__dirname, '../views/checkout/cart'),{ Title: 'Carrito' });
    },
    additemCart: (req,res)=>{

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            Product.findByPk(req.body.producto,{
                include : ['subcategory']
            })
            .then(productos=>{
                return res.send(productos)
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
        
    }
    
}