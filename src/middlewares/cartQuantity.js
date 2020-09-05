const { Item } = require('../database/models');


//Para mi el state = 1 significa que el usuario aun no ha finalizado la compra si por el contrario el usuario finaliza la compra, entonces lo paso a state = 0

module.exports = (req, res, next) => {
    if (req.session.usuarioLogueado) {
        Item.findAndCountAll({  //Este es un metodo de sequelize que me permite contar la cantidad de regsitros que hay con respecto a cierta condición indicada
            where: {
                userId: req.session.usuarioLogueado.id,
                status: 1
            },
            force: true
        })
            .then(data => {
                
                res.locals.cartQuantity = data.count;
                return next();
            }).catch(error => console.log(error)) 
    } else {
        return next();
    }
}