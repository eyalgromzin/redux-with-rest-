import {
  selectSearchText,
  setSearchResults,
  addToHistory,
  setLastSearchedText,
} from '../redux/searchSlice';
import {getResultsFromWeb, addToHistoryOnServer} from '../api'

export const search = async (dispatch, searchText, isAddToHistory=true) => {
  if(searchText){
    let results = await getResultsFromWeb(searchText)
    
    if(Array.isArray(results)){
      dispatch(setSearchResults(results))
      
      dispatch(setLastSearchedText(searchText))

      if(isAddToHistory){
        let isAddedHistory = await addToHistoryOnServer(searchText)
    
        if(isAddedHistory){
          dispatch(addToHistory(searchText))
        }
      }
    }
  }else{
    alert('plx enter search text')
  }
}