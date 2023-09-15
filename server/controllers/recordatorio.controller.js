const Recordatorio = require("../models/recordatorio.models");

module.exports.get_all = (req, res) => {
    //1 ASC 1-10   -1 DESC 10-1
    Recordatorio.find().sort({prioridad: -1})
        .then(recordatorios => res.json(recordatorios))
        .catch(err => {res.status(400).json(err)});
}

module.exports.create_recordatorio = (req, res) => {
    Recordatorio.findOne({titulo: req.body.titulo})
        .then(recordatorio =>{
            if(recordatorio != null){
                //Ya existe un recordatorio con ese titulo
                let err = {"errors": 
                            {"titulo": 
                                {"message": "El titulo ya existe"}
                            }
                        };
                res.status(400).json(err);
            } else {
                Recordatorio.create(req.body)
                    .then(recordatorio => res.json(recordatorio))
                    .catch(err => {res.status(400).json(err)});
            }
        })
}

module.exports.get_recordatorio = (req, res) => {
    Recordatorio.findOne({_id: req.params.id})
        .then(recordatorio => res.json(recordatorio))
        .catch(err => {res.status(400).json(err)});
}

module.exports.update_recordatorio = (req, res) => {
    Recordatorio.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
        .then(recordatorio => res.json(recordatorio))
        .catch(err => {res.status(400).json(err)});
}

module.exports.delete_recordatorio = (req, res) => {
    Recordatorio.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => {res.status(400).json(err)});
}