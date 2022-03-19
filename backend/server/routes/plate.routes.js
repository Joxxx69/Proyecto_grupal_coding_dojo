const controller = require('../controller/plate.controller');


module.exports = function(app) {
    app.post('/api/createPlate', controller.createPlate );
    app.get('/api/getAll', controller.getAll);
    app.get('/api/getRandom/:ing1/:ing2/:ing3', controller.randomPlate);
    app.patch('/api/edit_plato/:id', PlatoController.updatePlato);
}  
