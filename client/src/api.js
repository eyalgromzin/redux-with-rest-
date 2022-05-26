const axios = require('axios');

export const getResultsFromWeb = async (searchText) => {
  let res = await axios.get('/api/getResults', {
    params: {
      searchText
    }
  })

  return res
}