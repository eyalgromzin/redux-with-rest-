const services = require('./services')

exports.addRoutes = function addRoutes(app){
  
  app.post('/api/getResults', (req, res) => {
    // const searchText = req.query.searchText  //get param
    const searchText = req.body.params.searchText  //post param

    services.getResults(searchText).then(results =>{
      res.send(results);
    }).catch(e => {
      res.send({isSuccess: false, error: e})
    })

  });

  app.post('/api/addToHistory', (req, res) => {
    // const searchText = req.query.searchText  //get param
    const searchText = req.body.params.searchText  //post param

    services.addToHistory(searchText).then(results =>{
      res.send({isSuccess: true});
    }).catch(e => {
      res.send({isSuccess: false, error: e})
    })

  });

  app.post('/api/getHistory', (req, res) => {
    services.getHistory().then(results =>{
      res.send(results);
    }).catch(e => {
      res.send({isSuccess: false, error: e})
    })

  });
  
}