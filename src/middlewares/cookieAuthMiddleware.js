const fs = require('fs');
const path = require('path');

let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))

module.exports = (req,res,next) =>{
        res.locals.usuarioLogueado = false;
    if (req.session.usuarioLogueado){
        res.locals.usuarioLogueado = req.session.usuarioLogueado;
        return next();
    } else if(req.cookies.recordame){
        let usuarioLogueado = usuariosActuales.find(usuarioLogueado => usuarioLogueado.email == req.cookies.recordame)
        
        delete usuarioLogueado.password;
        req.session.usuarioLogueado = usuarioLogueado;
        res.locals.usuarioLogueado = usuarioLogueado;
        return next();
    } else{
        return next();
    }
}