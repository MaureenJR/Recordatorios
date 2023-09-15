const RecordatorioController = require("../controllers/recordatorio.controller");

module.exports = app => {
    app.get('/api/recordatorios', RecordatorioController.get_all);
    app.post('/api/recordatorios', RecordatorioController.create_recordatorio);
    app.get('/api/recordatorios/:id', RecordatorioController.get_recordatorio);
    app.put('/api/recordatorios/:id', RecordatorioController.update_recordatorio);
    app.delete('/api/recordatorios/:id', RecordatorioController.delete_recordatorio);
}

//err.titulo.message
//err.contenido.message
//err.prioridad.message