const path = require('path');
const fs = require('fs');



const usersController = {

    profile: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/profile.html'));
        //res.render(path.resolve(__dirname, '../views/web/nosotros'));
    },
    register: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/users/register.html'));
        res.render(path.resolve(__dirname, '../views/users/register'));
    },
    login: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/users/login.html'));
        res.render(path.resolve(__dirname, '../views/users/login'),{Title:'Login'});
    },
    crud: function (req, res) {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        res.render(path.resolve(__dirname, '../views/users/usersCRUD'), { Title: 'Usuarios', usuarios: usuarios } );
    },

}
module.exports = usersController;