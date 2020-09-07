module.exports = (req, res, next) => {
    if (req.session.usuarioLogueado.roleId != 3) {
        return res.redirect('/');
    }

    return next();
}
