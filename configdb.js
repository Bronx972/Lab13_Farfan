const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://ricardo_guerrero:6yZP7foge7Rc13Ic@labnubes.zdwmsbb.mongodb.net/';

const conectarDB = async () => {
  try {
    await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

module.exports = conectarDB;
