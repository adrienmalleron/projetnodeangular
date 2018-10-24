const Client = require('../models/Client.model.js');

exports.create =( req,res)=>{
   
    const client = new Client({
        NomEntreprise: req.body.NomEntreprise || "untilted CLient",
        rue: req.body.rue,
        ville: req.body.ville,
        codepostal:req.body.codepostal,
        contact:req.client.contact,
        prenom:req.salarie.prenom,
        telephone:req.body.telephone,
        mail:req.body.mail,
        activite:req.body.activite
    });
    client.save().then(data => {
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while creating the client."
        });
    }); 
};

exports.findOne = (req, res) => {
    Client.findById(req.params.id)
   .then(client => {
       if(!client) {
           return res.status(404).send({
               message: "client not found with id " + req.params.id
           });
       }
       res.send(client);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Client not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving client with id " + req.params.id
       });
   });
};
exports.update = (req, res) => {

    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Client content can not be empty"
        });
    }

    // Find user and update it with the request body
    Client.findByIdAndUpdate(req.params.id, {
        NomEntreprise: req.body.NomEntreprise || "untilted CLient",
        rue: req.body.rue,
        ville: req.body.ville,
        codepostal:req.body.codepostal,
        contact:req.client.contact,
        prenom:req.salarie.prenom,
        telephone:req.body.telephone,
        mail:req.body.mail,
        activite:req.body.activite
    }, {new: true})
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Client not found with id " + req.params.id
            });
        }
        res.send(client);
    }).catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "client not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating client with id " + req.params.id
        });
    });

};
exports.delete = (req, res) => {
    Client.findByIdAndRemove(req.params.id)
    .then(client => {
        if(!user) {
            return res.status(404).send({
                message: "Client not found with id " + req.params.id
            });
        }
        res.send({message: "Client deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "client not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete client with id " + req.params.id
        });
    });

};
exports.findAll = (req, res) => {

    Client.find()
    .then(client => {
        res.send(client);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving client."
        });
})}