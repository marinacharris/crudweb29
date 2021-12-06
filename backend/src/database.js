const mongoose = require('mongoose'); 

const URI = 'mongodb+srv://fullstack:<fullstac123>@cluster0.t6bow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('Base de datos conectada')
})