const { default: axios } = require('axios');


const getDataFromResult = (result, res) => {
  if(result.FirstURL){
    res.push({
      url: result.FirstURL,
      text: result.Text
    })
  }else{
    let s = 4
    if(result.Topics && Array.isArray(result.Topics)){
      getResultsRecursively(result.Topics, res)
    }
  }
}

const getResultsRecursively = (results, res) => {
  if(Array.isArray(results)){
    for(let result of results){
      getResultsRecursively(result, res)
    }
  }else{
    getDataFromResult(results, res)
  }
} 

const getResults = async (searchText) => {
  let url = `http://api.duckduckgo.com/?q=${encodeURIComponent(searchText)}&format=json`

  let results = await axios.get(url)
  
  results = results.data.RelatedTopics

  const res = []

  getResultsRecursively(results, res)
  
  return res
}

module.exports = {
  getResults,
};