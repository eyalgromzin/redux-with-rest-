import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from "./searchField.css";
import {getResultsFromWeb} from '../../api.js'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchText,
  setSearchText,
} from '../../redux/searchSlice';

const SearchField = () => {
  const [text, setText] = useState('')


  const onSearchTextChange = (e) => {
    const text = e.target.value
  }

  


  return <div>
    <input type='text' className={styles.searchInput} onChange={onSearchTextChange} />

    <button onClick={search} ></button>
  </div>
}

export default SearchField