const mongoose = require('mongoose');
require('dotenv').config();
const dbURL = process.env.MONGO;

const conectarDB = async () => {
  try {
    await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

module.exports = conectarDB;
