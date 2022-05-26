const services = require('./services')

exports.addRoutes = function addRoutes(app){
  
  app.get('/api/getResults', (req, res) => {
    const searchText = req.query.searchText

    services.getResults(searchText).then(results =>{
      res.send(results);
    }).catch(e => {
      res.send({success: false, error: e})
    })

  });
  
}