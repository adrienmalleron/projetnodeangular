module.exports = (app) => {
    const Client = require('./../controllers/Client.controller.js');
  
    app.post('/Client',Client.create);
    app.get('/home', Client.findAll);
    app.get('/home/:id',Client.findOne);
    app.put('/Client',Client.update);
    app.delete('/Client/:id',Client.delete);

}