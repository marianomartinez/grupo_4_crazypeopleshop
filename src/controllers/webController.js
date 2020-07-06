const path = require('path');
const fs = require('fs');
//Express validator
let { check, validationResult, body } = require('express-validator');



const webController = {
    index: function(req,res){
        //res.sendFile(path.resolve(__dirname, '../views/web/index.html'));
        res.render(path.resolve(__dirname, '..', 'views', 'web', 'index'), { Title: 'Home', usuario: req.session.usuarioLogueado});
    },
    nosotros: function(req,res){
        //res.sendFile(path.resolve(__dirname, '../views/web/nosotros.html'));
        res.render(path.resolve(__dirname, '../views/web/nosotros'), { Title: 'Nosotros' });
    },
    contact: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/web/contact.html'));
        res.render(path.resolve(__dirname, '../views/web/contact'),{ Title: 'Contacto' });
    }

}
module.exports = webController;