import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from "./searchField.css";
import {getResultsFromWeb} from '../../api.js'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchText,
  setSearchText,
} from '../../redux/searchSlice';

const SearchField = () => {
  const dispatch = useDispatch();

  const searchFieldText = useSelector(selectSearchText)

  const onSearchTextChange = (e) => {
    const text = e.target.value

    dispatch(setSearchText(text))
  }

  return <input type='text' placeholder="search text" value={searchFieldText} className={styles.searchInput} onChange={onSearchTextChange} />
}

export default SearchField