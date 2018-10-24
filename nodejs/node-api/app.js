
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



app.use(bodyParser.json()); 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://4510471:Calimero1@ds119993.mlab.com:19993/angular-test',{
  useNewUrlParser:true
}).then(() => {
  console.log("sucess");
}).catch(err=>{
  console.log('fail');
  process.exit;
});





app.use(function(req,res,next){
  res.setHeader('Content-type','application/json');
  res.setHeader('Accept','application/json');
  res.setHeader('Acess-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Acess-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE,OPTIONS');
 // res.setHeader('Acess-Control-Allow-Headers','Origin,Accept,Content-type,Authorization');

  next();
})
require('./routes/Projet.route.js')(app);
app.listen(3000, function () {
  console.log('Example app listening on port 3000 !')
})

