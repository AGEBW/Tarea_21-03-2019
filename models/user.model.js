const mongoose = require('mongoose');

//Construyendo el esquema
const userSchema = new mongoose.Schema({
    Nombre:{
        type: String
      },
      Email:{
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
      },
      NC:{
        type: Number,
        required:true
      },
      Semestre:{
        type: Number,
        min:3,
        required:true
      }
});

//Modelo
const userModel = mongoose.model('User2', userSchema, 'users2');

module.exports = userModel;
