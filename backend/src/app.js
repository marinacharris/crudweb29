const express = require('express');
const app = express();
const cors = require('cors');

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/articulos', (req, res) =>res.send('Esta es la ruta de artículos A'));

module.exports = app;