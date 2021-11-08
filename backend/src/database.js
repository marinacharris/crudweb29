const mongoose = require('mongoose'); 

const URI = 'mongodb://localhost/crudweb29';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('Base de datos conectada')
})