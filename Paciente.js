const mongoose = require('mongoose');

const archivoSchema = new mongoose.Schema({
  apellidos: String,
  nombres: String,  
  sexo: String,
  especialidad : String,
  urlImagen: String,
});

const Paciente = mongoose.model('Paciente', archivoSchema);

module.exports = Paciente;