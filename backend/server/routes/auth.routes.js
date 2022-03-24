const controllers = require('../controller/auth.controller');

module.exports = function(app){
    app.post('/api/register', controllers.Register);
    app.post('/api/login', controllers.Login);
    app.get('/api/getAll',controllers.getAll);
}


  

