const { default: axios } = require('axios');
var path = require('path'); 
const fsPromises = require('fs').promises
const fs2 = require('fs')

history = {
  history: []
}

const HISTORY_SIZE = 10
const HISTORY_FILE_PATH = './history.json'

const createHistoryFile = () => {
  fsPromises.writeFile(HISTORY_FILE_PATH,"")
}

if (!fs2.existsSync(HISTORY_FILE_PATH)) {
  createHistoryFile()
}
    
const initHistoryFromFile = async () => {
  const loadedHistory = await fsPromises.readFile(HISTORY_FILE_PATH)
  
  const historyJson = loadedHistory.toString()

  if(historyJson){
    history = JSON.parse(historyJson)
  }
}

initHistoryFromFile()

const saveHistoryToFile = async () => {
  await fsPromises.writeFile(HISTORY_FILE_PATH, JSON.stringify(history))  //fails
}

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



const addToHistory = async (searchText) => {  
    history.history.unshift(searchText)
  
    await saveHistoryToFile()  
}

const getHistory = async () => {
  return history.history
}





module.exports = {
  getResults,
  getHistory,
  addToHistory
};