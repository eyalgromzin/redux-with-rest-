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

  const onSearchTextChange = (e) => {
    const text = e.target.value

    dispatch(setSearchText(text))

    let s = 4
  }

  return <div>
    <input type='text' className={styles.searchInput} onChange={onSearchTextChange} />
  </div>
}

export default SearchField