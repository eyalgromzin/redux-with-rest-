const { default: axios } = require('axios');

const getResults = async (searchText) => {
  const results = await axios.get(`​http://api.duckduckgo.com/?q=${searchText}&format=json`).then(res => res.json)

  return results
}

module.exports = {
  getResults,
};