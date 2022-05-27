import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from './searchButton.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchText,
  setSearchResults,
  addToHistory,
} from '../../redux/searchSlice';
import {getResultsFromWeb, addToHistoryOnServer} from '../../api'

const SearchButton = ({text}) => {
  const searchText = useSelector(selectSearchText)

  const dispatch = useDispatch()    

  const search = async () => {
    
    let results = await getResultsFromWeb(searchText)
    
    let isAdded = await addToHistoryOnServer(searchText)

    if(isAdded){
      dispatch(addToHistory(searchText))
    }
    if(results){
      dispatch(setSearchResults(results))
    }
  }

  return <div className={styles.searchButton} onClick={search} >
    Go
  </div>
}

export default SearchButton