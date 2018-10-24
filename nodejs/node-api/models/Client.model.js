const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    NomEntreprise:String,
    adresse:[{
        rue:String,
        ville:String,
        codepostal:Number
    }],
    contact:[{
        nom:String,
        prenom:String,
        telephone:Number,
        mail:String
    }],
    activite: String,
  

},
{
    timestamp:true
});
module.exports = mongoose.model('Client',ClientSchema);