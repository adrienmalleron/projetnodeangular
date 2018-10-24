const mongoose = require('mongoose');

const ProjetSchema = mongoose.Schema({
    name:String,
    description: String,
    startdate:String,
    EndDate:String,
    client:String,
    salarie : String,
    prix : String,
    status: String, 

},
{
    timestamp:true
});
module.exports = mongoose.model('Projet',ProjetSchema);