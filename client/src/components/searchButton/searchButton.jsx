import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from './searchButton.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchText,
} from '../../redux/searchSlice';
import {search} from '../common'

const SearchButton = ({text}) => {
  const searchText = useSelector(selectSearchText)

  const dispatch = useDispatch()    

  return <div className={styles.searchButton} onClick={() => search(dispatch, searchText, true)} >
    Go
  </div>
}

export default SearchButton