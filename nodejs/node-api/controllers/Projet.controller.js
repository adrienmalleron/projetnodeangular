const Projet = require('../models/Projet.model.js');

exports.create =( req,res)=>{
   
    const projet = new Projet({
        name:req.body.name,
        description: req.body.description,
        startdate:req.body.startdate,
        EndDate:req.body.startdate,
        client:req.body.client,
        salarie : req.body.salarie,
        prix : req.body.prix,
        status: req.body.status, 
    });
    projet.save().then(data => {
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while creating the projet."
        });
    }); 
};

exports.findOne = (req, res) => {
    Projet.findById(req.params.id)
   .then(projet => {
       if(!projet) {
           return res.status(404).send({
               message: "projet not found with id " + req.params.id
           });
       }
       res.send(projet);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Projet not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving projet with id " + req.params.id
       });
   });
};
exports.update = (req, res) => {

    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Projet content can not be empty"
        });
    }

    // Find user and update it with the request body
    Projet.findByIdAndUpdate(req.params.id, {
        name:req.body.name,
        description: req.body.description,
        startdate:req.body.startdate,
        EndDate:req.body.startdate,
        client:req.body.client,
        salarie : req.body.salarie,
        prix : req.body.prix,
        status: req.body.status,
    }, {new: true})
    .then(projet => {
        if(!projet) {
            return res.status(404).send({
                message: "Projet not found with id " + req.params.id
            });
        }
        res.send(projet);
    }).catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "projet not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating client with id " + req.params.id
        });
    });

};
exports.delete = (req, res) => {
    Projet.findByIdAndRemove(req.params.id)
    .then(projet => {
        if(!projet) {
            return res.status(404).send({
                message: "Projet not found with id " + req.params.id
            });
        }
        res.send({message: "Projet deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "projet not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete projet with id " + req.params.id
        });
    });

};
exports.findAll = (req, res) => {

    Projet.find()
    .then(projet => {
        res.send(projet);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving projet."
        });
})}