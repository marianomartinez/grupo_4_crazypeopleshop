const express = require('express');
const app = express();

//Debemos decirle a node - Donde estan nuestros archivos estáticos
app.use(express.static('public'));

//Setear cual va a corresponder al template engine -EJS
app.set('view engine', 'ejs');

//Rutas  - Requerir archivo donde esta la ruta
const webRoutes = require('./routes/webRoutes');
const usersRoutes = require('./routes/usersRoutes')
const productsRoutes = require('./routes/productsRoutes')
//Usar ese archivo de rutas

app.use(webRoutes);
app.use(productsRoutes);
app.use(usersRoutes);

//Levantar nuestro servidor
app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
