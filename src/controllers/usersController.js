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
    // MM agrega desde acá
    add: function (req, res) {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        res.render(path.resolve(__dirname, '../views/users/usersCRUD-add'), {
            Title: 'Usuarios',
            usuarios: usuarios
        });
    },
    // MM hasta acá
    save: function (req, res) {



        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        let usuarioUltimo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        
        usuarioUltimo = usuarioUltimo.pop();
        

 

        let usuarioNuevo = {
            id: usuarioUltimo.id + 1,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            confirm_password: req.body.confirm_password,
            confirm_password: req.body.telefono,
            administra: req.body.user


        }
        
        
        usuariosActuales.push(usuarioNuevo);

        let usuarioJSON = JSON.stringify(usuariosActuales)

        fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON)
        res.redirect('/users/crud');

    },
    show: function (req, res) {

        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        let usuarioId = req.params.id;
        const usuarioShow = usuariosActuales.find(usuario =>usuario.id == usuarioId);
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'detail'), { usuarioShow: usuarioShow, Title: 'Usuario-Visualizar'})
        
    },

    delete: function (req, res) {

        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        let usuarioId = req.params.id;
        const usuariosNuevos = usuariosActuales.filter(usuario => usuario.id != usuarioId)
        
        let usuarioJSON = JSON.stringify(usuariosNuevos)
        fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON)
        res.redirect('/users/crud');
    },
    edit: function (req, res) {

        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        let usuarioId = req.params.id;
        const usuarioEdit = usuariosActuales.find(usuario => usuario.id == usuarioId);
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'edit'), { usuarioEdit: usuarioEdit, Title: 'Usuario-Edición' })

    },
    update: function (req, res) {

        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        req.body.id = req.params.id;
        let usuarioUpdate = usuariosActuales.map(usuario => {    //id nombre descripcion precio imagen
            if (usuario.id == req.body.id) {
                return usuario = req.body;
            }
            return usuario;
        });
        usuarioJSON = JSON.stringify(usuarioUpdate, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON);
        res.redirect('/users/crud');   

    }
}


module.exports = usersController;