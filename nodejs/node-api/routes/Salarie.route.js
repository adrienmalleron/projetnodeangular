module.exports = (app) => {
    const Salarie = require('./../controllers/Client.controller.js');
  
    app.post('/Salarie',Salarie.create);
    app.get('/home', Salarie.findAll);
    app.get('/home/:id',Salarie.findOne);
    app.put('/Salarie',Salarie.update);
    app.delete('/Salarie/:id',Salarie.delete);

}