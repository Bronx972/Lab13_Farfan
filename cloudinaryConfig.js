const cloudinary = require('cloudinary').v2;
require('dotenv').config();


cloudinary.config({
    cloud_name: 'dwow4e7oy',
    api_key: '447298389281377',
    api_secret: 'n5nq_l-ropnTi9LuF3GRkOfqkFk'
  });


module.exports = cloudinary;