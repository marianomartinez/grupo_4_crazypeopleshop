const path =require("path")
const db = require('../database/models/')
const Product = db.Product;
const Cart = db.Cart;
const Item = db.Item;
const User = db.User;

//Express validator
let { check, validationResult, body } = require('express-validator');
const { LOADIPHLPAPI } = require("dns");

module.exports= {
   
    additemCart: (req,res)=>{

        let errors = validationResult(req);
        console.log(errors);
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
                //res.send(items)
                res.render(path.resolve(__dirname, '..', 'views', 'checkout', 'cart'), {Title : 'Carrito', cartProducto: items, total });
            })

    },
    deleteitemCart: (req, res) => {
        Item.destroy({
            where: {
                id: req.body.itemId,
                userId: req.session.usuarioLogueado.id
            }
        })
            .then(() => res.redirect('/cart'))
            .catch(error => console.log(error))
    
    
    },
    shop: (req, res) => {
        let totalPrecio = 0;
        Item.findAll({
            where: {
                userId: req.session.usuarioLogueado.id,
                status: 1
            }
        })
            .then((items) => {
                totalPrecio = items.reduce((total, item) => (total = total + Number(item.subtotal)), 0)
            })
        Cart.findOne({
            order: [['createdAt', 'DESC']]
        })
            .then((cart) => {
                return Cart.create({
                    orderNumber: cart ? cart.orderNumber + 1 : 1,
                    total: totalPrecio,
                    userId: req.session.usuarioLogueado.id
                })
            })
            .then(cart => {
                Item.update({
                    status: 0,
                    cartId: cart.id
                }, {
                    where: {
                        userId: req.session.usuarioLogueado.id,
                        status: 1
                    }
                }
                )
            })
            .then(() => res.redirect('/cart/cartHistory'))
            .catch(error => console.log(error))
    },
    cartHistory: (req, res) => {
        Cart.findAll({
            order: [['createdAt', 'DESC']],
            where: {
                userId: req.session.usuarioLogueado.id
            },
            include: {
                all: true,
                nested: true
            }
        })
            .then(carts => {
                //res.send(carts)
                res.render(path.resolve(__dirname, '..', 'views', 'checkout', 'cartHistory'), { carts, Title: 'Historial'});
            })
    },
    cartDetail: (req,res)=>{
        Cart.findByPk(req.params.id, {
                include: {
                all: true,
                nested: true
            }
        })
            .then((cart) => {
                //res.send(cart)
               res.render(path.resolve(__dirname, '..', 'views', 'checkout', 'cartDetail'), { cart });
            })

    },
    cartRepeat: (req, res) => {
        Cart.findByPk(req.params.id, {
            include: {
                all: true,
                nested: true
            }
        })
            .then((cart) => {
                //res.send(cart)
                res.render(path.resolve(__dirname, '..', 'views', 'checkout', 'cartRepeat'), { cart });
            })

    },

    cartCopy: (req, res) => {
       
        Item.findAll({
            include: {
                all: true,
                nested: true
            },
            where: {
                userId: req.session.usuarioLogueado.id,
                status: 0,
                cartId : req.params.id
            }
        })
            .then(async(items) => {
               //res.send(items)
               for(let i=0;i < items.length;i++){
               await Item.create({
                    grossPrice: items[i].product.price ,
                    discount: items[i].product.discount,
                    netPrice: items[i].product.price * ((100 - items[i].product.discount)/100),
                    quantity: items[i].quantity,
                    subtotal: items[i].quantity * (items[i].product.price * ((100 - items[i].product.discount) / 100)),
                     status:1,
                    userId: req.session.usuarioLogueado.id,
                    sizeId: items[i].sizeId,
                    productId: items[i].productId
                })
                }
                // .then(result=>{
                   //res.send(result)
                return res.redirect('/cart')
                   
            })
                   .catch(err=>res.send(err))
        
    
        
    },
    cartSumounidad: (req, res) => {
      
        Item.update(
            {quantity : Number(req.body.quantity) + 1,
                subtotal: (Number(req.body.quantity) + 1) * req.body.netPrice },{
                where: {
                    id: req.body.itemId        
                }
               
            }).then(resultado=>{
                return res.redirect('/cart')
            })

    },
    cartRestounidad: (req, res) => {


        Item.update(
            {
                quantity: req.body.quantity == 1 ? 1 : Number(req.body.quantity) - 1,
                subtotal: (req.body.quantity == 1 ? 1 * req.body.netPrice : (Number(req.body.quantity) - 1) * req.body.netPrice) 
            }, {
            where: {
                id: req.body.itemId
            }

        }).then(resultado => {
            return res.redirect('/cart')
        })

    

    }




    
}