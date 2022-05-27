import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from './searchButton.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchText,
  setSearchResults,
  addToHistory,
} from '../../redux/searchSlice';
import {getResultsFromWeb} from '../../api'

const SearchButton = ({text}) => {
  const searchText = useSelector(selectSearchText)

  const dispatch = useDispatch()    

  const search = async () => {
    dispatch(addToHistory(searchText))

    let results = await getResultsFromWeb(searchText)

    if(results.data){
      dispatch(setSearchResults(results.data))
    }
  }

  return <div className={styles.searchButton} onClick={search} >
    Go
  </div>
}

export default SearchButton