const services = require('./services')

exports.addRoutes = function addRoutes(app){
  
  app.get('/api/getPrograms', (req, res) => {
    const searchText = req.query.searchText

    services.getResults(searchText).then(res =>{
      res.send('results');
    }).catch(e => {
      res.send({success: false})
    })

  });
  
}