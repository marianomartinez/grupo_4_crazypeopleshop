const path = require('path');
const fs = require('fs');



const webController = {
    index: function(req,res){
        //res.sendFile(path.resolve(__dirname, '../views/web/index.html'));
        res.render(path.resolve(__dirname, '..','views','web','index'),{Title: 'Home'});
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