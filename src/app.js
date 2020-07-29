const express = require('express');
const app = express();
var logMiddleware = require('./middlewares/logMiddleware')
var cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware')

//Sesion
var session= require('express-session');
app.use(session({
    secret: 'supersecret',
    resave: true,
    saveUninitialized: true}));

 //cookies
 var cookieParser = require('cookie-parser')
 app.use(cookieParser());

//Middlewares creados
app.use(logMiddleware);
app.use(cookieAuthMiddleware);


//Debemos decirle a node - Donde estan nuestros archivos estáticos
app.use(express.static('public'));


//PUT y POST

//Requerir method-override
const methodOverride = require('method-override');
//Usar method override
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

//Setear cual va a corresponder al template engine -EJS
app.set('view engine', 'ejs');

//Rutas  - Requerir archivo donde esta la ruta
const webRoutes = require('./routes/webRoutes');
const usersRoutes = require('./routes/usersRoutes')
// MM AGREGA DESDE ACA
const categoriesRoutes = require('./routes/categoriesRoutes')
const subcategoriesRoutes = require('./routes/subcategoriesRoutes')
// MM HASTA ACA
const productsRoutes = require('./routes/productsRoutes')
const checkoutRoutes = require('./routes/checkoutRoutes')
//Usar ese archivo de rutas

app.use(webRoutes);
// MM AGREGA DESDE ACA
app.use(categoriesRoutes);
app.use(subcategoriesRoutes);
// MM HASTA ACA
app.use(productsRoutes);
app.use(usersRoutes);
app.use(checkoutRoutes);




//Levantar nuestro servidor
app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
