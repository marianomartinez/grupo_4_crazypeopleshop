const path = require('path');
const fs = require('fs');



const usersController = {

    profile: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/profile.html'));
        //res.render(path.resolve(__dirname, '../views/web/nosotros'));
    },
    register: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/register.html'));
        //res.render(path.resolve(__dirname, '../views/web/nosotros'));
    },
    login: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/login.html'));
        //res.render(path.resolve(__dirname, '../views/web/nosotros'));
    }


}
module.exports = usersController;