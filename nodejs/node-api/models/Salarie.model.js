const mongoose = require('mongoose');

const SalarieSchema = mongoose.Schema({
    Lastname:String,
    Firstname: String,
    username: String,
    birthday:Date,
    adresse:[{
        rue:String,
        ville:String,
        codepostal:Number
    }],
    telephone:Number,   
    mail:String,
    poste:String

  

},
{
    timestamp:true
});
module.exports = mongoose.model('Salarie',SalarieSchema);