const fs = require('fs');

function cookieAuthMiddleware(req,res,next){

if(req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined)  {

    let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
    for (let i = 0; i < usuariosActuales.length; i++) {
        if (usuariosActuales[i].email == req.cookies.recordame) {
                 let usuarioaLoguearse = usuariosActuales[i];

        }
    }

    req.session.usuarioLogueado = usuarioaLoguearse;
}

}

module.exports = cookieAuthMiddleware;