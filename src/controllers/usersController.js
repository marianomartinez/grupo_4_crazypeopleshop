const path = require('path');
const fs = require('fs');
const db = require('../database/models/')
const bcrypt = require('bcryptjs');

const User = db.User;


//Express validator
let { check, validationResult, body } = require('express-validator');
const { forEach } = require('../middlewares/userLogin');

// let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))

const usersController = {

    profileShow: function (req, res) {

        User
            .findAll({
                where: { id: req.session.usuarioLogueado.id }
            }).then(usuarioShow => {
                res.render(path.resolve(__dirname, '..', 'views', 'users', 'profileShow'), {
                    usuarioShow: usuarioShow[0],
                    Title: 'Mi perfil'
                })

            }).catch(error => res.send(error))
 
    },
    profileEdit: function (req, res, next) {

      
      
         User
             .findByPk(req.session.usuarioLogueado.id) 
         .then(usuarioEdit => {
           res.render(path.resolve(__dirname, '..', 'views', 'users', 'profileEdit'), { usuarioEdit: usuarioEdit, Title: 'Usuario-Edición' })
        })


    },
    profileUpdate: function (req, res) {
        
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const _body = req.body
            if (_body.password == '') {

                _body.password = _body.password_old
            } else {
                _body.password = bcrypt.hashSync(req.body.password, 10)

            }

            
                _body.image = req.file ? req.file.filename : req.body.image_old


            User
                .update(_body, {
                    where: { id: req.params.id }
                })
                .then(usuario => {
                    res.redirect('/users/profileShow');
                })

        }
        else {

            User
                .findByPk(req.params.id)
                .then(usuarioEdit => {
                    res.render(path.resolve(__dirname, '..', 'views', 'users', 'profileEdit'), { usuarioEdit: usuarioEdit, Title: 'Usuario-EEdición', errors: errors.mapped() })
                })

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
        
        User.findAll()
            .then(usuarios => {
                res.render(path.resolve(__dirname, '../views/users/usersCRUD'), { Title: 'Usuarios', usuarios: usuarios });
            })
            .catch(error => res.send(error))

    },

    add: function (req, res) {
        res.render(path.resolve(__dirname, '../views/users/usersCRUD-add'), {
            Title: 'Usuario-Crear'
         
        });
    },
  

    create: function (req, res) {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const _body = req.body
            _body.password = bcrypt.hashSync(req.body.password, 10),
            _body.role = _body.role ? 'true' : 'false',
            _body.image = req.file ? req.file.filename : 'usuariovacio1.png'
            User
                .create(_body)
                .then(usuario =>{
                    res.redirect('/users/crud');
                })

        }
        else {

            return res.render(path.resolve(__dirname, '../views/users/usersCRUD-add'),
                {
                    Title: 'Registro',
                    errors: errors.mapped(),
                    old: req.body
                });

        }

    },
    newguest: function (req, res) {
 
        let errors = validationResult(req);
       
        if (errors.isEmpty()) {
            const _body = req.body
            _body.password = bcrypt.hashSync(_body.password, 10),
            _body.role = _body.role ? 'true' : 'false',
                _body.image = req.file ? req.file.filename : 'usuariovacio1.png'
            User
                .create(_body)
                .then(usuario => {
                    res.redirect('/');
                })

        }
        else {

            return res.render(path.resolve(__dirname, '../views/users/usersCRUD-register'),
                {
                    Title: 'Registro',
                    errors: errors.mapped(),
                    old: req.body
                });

        }

    },
    show: function (req, res) {

        User
        .findByPk(req.params.id)
        .then(usuarioShow =>{
            res.render(path.resolve(__dirname, '..', 'views', 'users', 'detail'), { usuarioShow: usuarioShow, Title: 'Usuario-Visualizar' })
        })
        
        
    },

    delete: function (req, res) {
        User
        .destroy({
            where :{
            id : req.params.id
        },
        force : true
    }).then(confirm => {
        res.redirect('/users/crud');
    })
        
    },
    edit: function (req, res,next) {
        User
          .findByPk(req.params.id)
         .then(usuarioEdit => {
         res.render(path.resolve(__dirname, '..', 'views', 'users', 'edit'), { usuarioEdit: usuarioEdit, Title: 'Usuario-Edición' })
            })
        

    },
    update: function (req, res) {
       
        let errors = validationResult(req);
       
        if (errors.isEmpty()) {
            const _body = req.body
            if (_body.password == ''){
                
                _body.password = _body.password_old
            }else{
                _body.password = bcrypt.hashSync(req.body.password, 10)

            }
          
                _body.role = _body.role ? 'true' : 'false',
                _body.image = req.file ? req.file.filename : req.body.image_old
           
           
                User
                .update(_body,{
                    where : {id : req.params.id}
                })
                .then(usuario => {
                  res.redirect('/users/crud');
                })

        }
        else {

            User
                .findByPk(req.params.id)
                .then(usuarioEdit => {
                    res.render(path.resolve(__dirname, '..', 'views', 'users', 'edit'), { usuarioEdit: usuarioEdit, Title: 'Usuario-EEdición', errors: errors.mapped() })
                })

        }

    
    
    },
    processLogin: function (req, res, next) {
        
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            var usuarioaLoguearse = [];
            User
                .findAll({
                    where: { email: req.body.email}
                }).then(usuariosActuales =>{

                    usuarioaLoguearse = usuariosActuales;
                    delete usuarioaLoguearse[0].password;
                    req.session.usuarioLogueado = usuarioaLoguearse[0];
                    if (req.body.recordame != undefined) {
                       
                        res.cookie('recordame', usuarioaLoguearse[0].email, { maxAge: 1000 * 60 * 60 * 24 })
                    } else { res.cookie('recordame', 'vacio', { maxAge: 1000 * 60 * 60 * 24 }) }
                    res.redirect('/')

           
                }).catch(error => res.send(error))
                
                //entro al home y le paso el usuario que se logueo
            
        } else {

                return res.render(path.resolve(__dirname, '../views/users/login'), {
                     Title: 'Login',
                     usuarioMail: req.body.email,
                     password: req.body.password,
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