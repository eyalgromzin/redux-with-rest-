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
        history.map(textI => <HistoryItem text={textI} />)
      }
    </div>
  </div>
}

export default HistoryList