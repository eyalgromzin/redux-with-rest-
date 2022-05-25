const services = require('./services')

exports.addRoutes = function addRoutes(app){
  
  app.get('/api/getPrograms', (req, res) => {
    services.getAllPrograms(req, res)
  });
  
  app.post('/api/changeIsToWatchChange', (req, res) => {
    services.changeIsToWatchChange(req, res)
  });
  
  app.post('api/addProgram', (req, res) => {
    services.addProgram(req, res)
  })
  
  app.post('/api/fetchHistory', (req, res) => {
    services.getProgramHistory(req, res)
  });
}