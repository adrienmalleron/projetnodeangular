module.exports = (app) => {
  const Projet = require('./../controllers/Projet.controller.js');

  app.post('/Projet',Projet.create);
  app.get('/Projet', Projet.findAll);
  app.get('/Projet/:id',Projet.findOne);
  app.put('/Projet',Projet.update);
  app.delete('/Projet/:id',Projet.delete);
}
