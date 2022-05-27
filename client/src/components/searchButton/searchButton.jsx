import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from './searchButton.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchText,
} from '../../redux/searchSlice';
import {search} from '../common'

const SearchButton = () => {
  const searchText = useSelector(selectSearchText)
  
  const dispatch = useDispatch()    

  const onSearchClick = () => {
    search(dispatch, searchText, true)
  }

  return <div className={styles.searchButton} onClick={onSearchClick} >
    Go
  </div>
}

export default React.memo(SearchButton, () => true)