import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from './searchButton.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchText,
  setSearchResults,
} from '../../redux/searchSlice';
import {getResultsFromWeb} from '../../api'

const SearchButton = ({text}) => {
  const searchText = useSelector(selectSearchText)

  const dispatch = useDispatch()

  const search = async () => {
    let results = await getResultsFromWeb(searchText)

    dispatch(setSearchResults(results))

    let s = 4
  }

  return <div className={styles.searchButton} onClick={search} >
    Go
  </div>
}

export default SearchButton