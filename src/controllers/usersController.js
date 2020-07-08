const path = require('path');
const fs = require('fs');

//Express validator
let { check, validationResult, body } = require('express-validator');



const usersController = {

    profile: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/profile.html'));
        //res.render(path.resolve(__dirname, '../views/web/nosotros'));
    },
    register: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/users/register.html'));
        res.render(path.resolve(__dirname, '../views/users/usersCRUD-register'), {
            Title: 'Registro'
           
        });
    },
    login: function (req, res) {
       
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
            Title: 'Registro'
           
        });
    },
    // MM hasta acá
    create: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

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
                telefono: req.body.telefono,
                fecha_alta: Date(),
                administra: req.body.admin ? true : false,
                imagen: req.file ? req.file.filename : ""
            }
            usuariosActuales.push(usuarioNuevo);

            let usuarioJSON = JSON.stringify(usuariosActuales, null, 2)

            fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON)
            res.redirect('/users/crud');
        } else {

            return res.render(path.resolve(__dirname, '../views/users/usersCRUD-add'), {
                Title: 'Registro',
                errors: errors.errors
            });
        }

    },
    newguest: function (req, res) {
        let errors = validationResult(req);
        if(errors.isEmpty()){
        
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
            telefono: req.body.telefono,
            fecha_alta : Date(),
            administra: req.body.admin ? true : false,
            imagen: req.file ? req.file.filename : ""
            }
            usuariosActuales.push(usuarioNuevo);

            let usuarioJSON = JSON.stringify(usuariosActuales, null, 2)

            fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON)
            res.redirect('/');
        } else{
           
            return res.render(path.resolve(__dirname, '../views/users/usersCRUD-register'), {
                Title: 'Registro',
                errors:errors.errors            
            });
        }

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
        
        let usuarioJSON = JSON.stringify(usuariosNuevos, null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON)
        res.redirect('/users/crud');
    },
    edit: function (req, res,next) {

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
                
                    usuario.first_name = req.body.first_name,
                    usuario.last_name = req.body.last_name,
                    usuario.email = req.body.email,
                    usuario.password =  req.body.password,
                    usuario.telefono = req.body.telefono,
                    usuario.administra = req.body.admin ? true : false,
                    usuario.imagen = req.file ? req.file.filename : ""
                //return usuario = req.body;
            }
            return usuario;
        });
        usuarioJSON = JSON.stringify(usuarioUpdate, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON);
        res.redirect('/users/crud');   

    },
    processLogin: function (req, res, next) {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
            for (let i = 0; i<usuariosActuales.length;i++){
                if(usuariosActuales[i].email == req.body.email){
                    if (usuariosActuales[i].password == req.body.password){
                        var usuarioaLoguearse = usuariosActuales[i];
                        
                        
                        
                    }
                }
            }

            
            if (usuarioaLoguearse == undefined){
                return res.render(path.resolve(__dirname, '../views/users/login'), {
                    Title: 'Login',
                    errors: [{msg:'Credenciales Inválidas'}]
                });
            }
            //sesion usuario actual
            req.session.usuarioLogueado = usuarioaLoguearse;
            //veo si tildo recordame en el login
            if(req.body.recordame != undefined){
                res.cookie('recordame',usuarioaLoguearse.email,{maxAge:600000})
            }
            //entro al home y le paso el usuario que se logueo
            res.redirect('/'), {user: usuarioaLoguearse}; 
        } else {

            return res.render(path.resolve(__dirname, '../views/users/login'), {
                Title: 'Login',
                errors: errors.errors
            });
        }

    }
    

  
}


module.exports = usersController;