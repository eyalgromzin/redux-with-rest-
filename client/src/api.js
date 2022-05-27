const axios = require('axios');

export const getResultsFromWeb = async (searchText) => {
  let res = await axios.post('/api/getResults', {
    params: {
      searchText
    }
  })

  return res.data
}

export const getHistory = async () => {
  let res = await axios.post('/api/getHistory')

  return res
}

export const addToHistoryOnServer = async (searchText) => {
  let res = await axios.post('/api/addToHistory', {
    params: {
      searchText
    }
  })

  return res.data.isSuccess
}