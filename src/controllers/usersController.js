const path = require('path');
const fs = require('fs');
const db = require('../database/models/')
const bcrypt = require('bcryptjs');

const User = db.User;


//Express validator
let { check, validationResult, body } = require('express-validator');



const usersController = {

    profileShow: function (req, res) {
        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'models', 'usuarios.json')))
        let usuarioId = req.session.usuarioLogueado.id;
        const usuarioShow = usuariosActuales.find(usuario => usuario.id == usuarioId);
        res.render(path.resolve(__dirname, '..','views','users','profileShow'), {
            usuarioShow: usuarioShow,
            Title: 'Mi perfil'
        })

    },
    profileEdit: function (req, res, next) {

        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'models', 'usuarios.json')))
        let usuarioId = req.session.usuarioLogueado.id;
        let usuarioEdit = usuariosActuales.find(usuario => usuario.id == usuarioId);
        usuarioEdit.password = '';
        console.log(usuarioEdit);
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'profileEdit'), {
            usuarioEdit: usuarioEdit,
            Title: 'Editar mi perfil'
        })

        // User
        //   .findByPk(req.params.id) // !!! seguramente acá usemos req.session.usuarioLogueado.id
        // .then(usuarioEdit => {
        //   res.render(path.resolve(__dirname, '..', 'views', 'users', 'edit'), { usuarioEdit: usuarioEdit, Title: 'Usuario-Edición' })
        //})


    },
    profileUpdate: function (req, res) {
        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'models', 'usuarios.json')));
        req.body.id = req.session.usuarioLogueado.id;
        let usuarioUpdate = usuariosActuales.map(usuario => { //id nombre descripcion precio imagen
            if (usuario.id == req.body.id) {
                usuario.first_name = req.body.first_name,
                    usuario.last_name = req.body.last_name,
                    usuario.email = req.body.email,
                    usuario.password = bcrypt.hashSync(req.body.password, 10),
                    usuario.telefono = req.body.telefono,
                    usuario.administra = req.body.admin ? true : false,
                    usuario.imagen = req.file ? req.file.filename : req.body.image_old
                //return usuario = req.body;
            }
            return usuario;
        });
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            usuarioJSON = JSON.stringify(usuarioUpdate, null, 2);
            fs.writeFileSync(path.resolve(__dirname, '..', 'models', 'usuarios.json'), usuarioJSON);
            res.redirect('/users/profileShow');
        } else {
            let usuarioId = req.params.id;
            const usuarioEdit = usuarioUpdate.find(usuario => usuario.id == usuarioId);
            return res.render(path.resolve(__dirname, '..', 'views', 'users', 'profileEdit'), {
                Title: 'Registro',
                errors: errors.mapped(),
                usuarioEdit: usuarioEdit
            });
        }
    },
    register: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/users/register.html'));
        res.render(path.resolve(__dirname, '../views/users/usersCRUD-register'), {
            Title: 'Registro'
           
        });
    },
    login: function (req, res) {
       
        res.render(path.resolve(__dirname, '../views/users/login'),{Title:'Login',usuarioMail:req.cookies.recordame});
        
 
    },
    
    crud: function (req, res) {

        // let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        // res.render(path.resolve(__dirname, '../views/users/usersCRUD'), { Title: 'Admin-Usuarios', usuarios: usuarios });
        
            User.findAll()
            .then(usuarios => {
               res.render(path.resolve(__dirname, '../views/users/usersCRUD'), { Title: 'Usuarios', usuarios: usuarios });
           })
            .catch(error => res.send(error))
     
    },

       
    
    // MM agrega desde acá
    add: function (req, res) {
        //let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        res.render(path.resolve(__dirname, '../views/users/usersCRUD-add'), {
            Title: 'Usuario-Crear'
         
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
                password: bcrypt.hashSync(req.body.password, 10),
                telefono: req.body.telefono,
                fecha_alta: Date(),
                administra: req.body.admin ? true : false,
                imagen: req.file ? req.file.filename : "usuariovacio1.png"
            }
            usuariosActuales.push(usuarioNuevo);

            let usuarioJSON = JSON.stringify(usuariosActuales, null, 2)

            fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON)
            res.redirect('/users/crud');
        } else {

            return res.render(path.resolve(__dirname, '../views/users/usersCRUD-add'), {
                Title: 'Registro',
                errors: errors.mapped(),
                old: req.body    
            });
        }

    },
    newguest: function (req, res) {
 
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
            password: bcrypt.hashSync(req.body.password, 10),
            telefono: req.body.telefono,
            fecha_alta : Date(),
            administra: req.body.admin ? true : false,
            imagen: req.file ? req.file.filename : "usuariovacio1.png"
            }

            usuariosActuales.push(usuarioNuevo);

            let usuarioJSON = JSON.stringify(usuariosActuales, null, 2)

            fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON)
            res.redirect('/');
        } else{
           
            return res.render(path.resolve(__dirname, '../views/users/usersCRUD-register'), {
                Title: 'Registrate',
                errors:errors.mapped(),
                old : req.body           
            });
        }

    },
    show: function (req, res) {

        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        let usuarioId = req.params.id;
        const usuarioShow = usuariosActuales.find(usuario =>usuario.id == usuarioId);
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'detail'), { usuarioShow: usuarioShow, Title: 'Usuario-Visualizar' })

        //User
        //.findByPk(req.params.id)
        //.then(usuarioShow =>{
          //  res.render(path.resolve(__dirname, '..', 'views', 'users', 'detail'), { usuarioShow: usuarioShow, Title: 'Usuario-Visualizar' })
        //})
        
        
    },

    delete: function (req, res) {

        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        let usuarioId = req.params.id;
        const usuariosNuevos = usuariosActuales.filter(usuario => usuario.id != usuarioId)
        
        let usuarioJSON = JSON.stringify(usuariosNuevos, null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON)
        //User
        //.destroy({
          //  where :{
            //id : req.params.id
       // },
        //force : true
    //}).then(confirm => {
        res.redirect('/users/crud');
    //})
        
    },
    edit: function (req, res,next) {

        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        let usuarioId = req.params.id;
        const usuarioEdit = usuariosActuales.find(usuario => usuario.id == usuarioId);
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'edit'), { usuarioEdit: usuarioEdit, Title: 'Usuario-Editar' })

       // User
         //   .findByPk(req.params.id)
           // .then(usuarioEdit => {
             //   res.render(path.resolve(__dirname, '..', 'views', 'users', 'edit'), { usuarioEdit: usuarioEdit, Title: 'Usuario-Edición' })
            //})
        

    },
    update: function (req, res) {
       
        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        req.body.id = req.params.id;
        let usuarioUpdate = usuariosActuales.map(usuario => {    //id nombre descripcion precio imagen
            if (usuario.id == req.body.id) {

                usuario.first_name = req.body.first_name,
                    usuario.last_name = req.body.last_name,
                    usuario.email = req.body.email,
                    usuario.password = bcrypt.hashSync(req.body.password, 10),
                    usuario.telefono = req.body.telefono,
                    usuario.administra = req.body.admin ? true : false,
                    usuario.imagen = req.file ? req.file.filename : req.body.image_old
                //return usuario = req.body;
            }
            return usuario;
        });

        let errors = validationResult(req);
        if (errors.isEmpty()) {

            usuarioJSON = JSON.stringify(usuarioUpdate, null, 2);
            fs.writeFileSync(path.resolve(__dirname, '../models/usuarios.json'), usuarioJSON);
            res.redirect('/users/crud');   
        }
        else {
            
            let usuarioId = req.params.id;
            const usuarioEdit = usuarioUpdate.find(usuario => usuario.id == usuarioId);
          
            
            return res.render(path.resolve(__dirname, '../views/users/edit'), {
                Title: 'Registro',
                errors: errors.mapped(),
                usuarioEdit : usuarioEdit
            });
        }
    
    
    },
    processLogin: function (req, res, next) {

        let errors = validationResult(req);
        
        if (errors.isEmpty()) {
            let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
            for (let i = 0; i<usuariosActuales.length;i++){
                if(usuariosActuales[i].email == req.body.email){
                    if (bcrypt.compareSync(req.body.password , usuariosActuales[i].password)) {
                        var usuarioaLoguearse = usuariosActuales[i];
                    
                        
                        
                    }
                }
            }

            
            if (usuarioaLoguearse == undefined){
                    return res.render(path.resolve(__dirname, '../views/users/login'), {
                    Title: 'Login',
                    usuarioMail: req.body.email,
                    password: req.body.password,
                    old : req.body,
                    errors: errors.mapped()
                    //errors: {msg : 'Credenciales Inválidas'}
                });
            }
            //sesion usuario actual. Se guarda en el servidor.
            //no guardo el password en la sesion

            delete usuarioaLoguearse.password;
            req.session.usuarioLogueado = usuarioaLoguearse;
            
            //veo si tildo recordame en el login
            //Guardo cookies usuario que se loguea
            if(req.body.recordame != undefined){
                res.cookie('recordame',usuarioaLoguearse.email,{maxAge:1000 * 60 * 60 * 24})
            } else { res.cookie('recordame', 'vacio', { maxAge: 1000 * 60 * 60 * 24 })}
            //entro al home y le paso el usuario que se logueo
            res.redirect('/') 
        } else {
            
            return res.render(path.resolve(__dirname, '../views/users/login'), {
                Title: 'Login',
                usuarioMail: req.body.email,
                password : req.body.password,
                old: req.body,
                errors: errors.mapped()
            });
        }

   },
    
logout: function (req, res) {
    
    req.session.destroy();
    res.cookie('recordame',null, {maxAge:-1});
    let categories = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
    res.redirect('/')

}
  
}


module.exports = usersController;