import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from './historyList.module.css'
import {
  selectSearchText,
  setSearchResults,
  addToHistory,
  selectHistory
} from '../../redux/searchSlice';
import { useSelector, useDispatch } from 'react-redux';
import HistoryItem from "./historyItem";

const HistoryList = () => {
  const history = useSelector(selectHistory);

  return <div className={styles.history}>
    <div className={styles.historyListHeader}>search history</div>
    <div className={styles.itemsContainer}>
      {
        //no point in adding keys here cause there are duplicates. and its only text. 
        history.map((textI, i) => <HistoryItem text={textI} i={i} key={i} />)
      }
    </div>
  </div>
}

export default HistoryList