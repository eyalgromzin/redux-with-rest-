import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from './historyList.module.css'
import {
  selectSearchText,
  setSearchResults,
  addToHistory,
  selectHistory
} from '../../redux/searchSlice';
import { useSelector, useDispatch } from 'react-redux';

const HistoryList = () => {
  const history = useSelector(selectHistory);

  return <div className={styles.history}>
    <div className={styles.historyListHeader}>HistoryList</div>
    {
      history.map(textI => <div className={styles.historyRow}>
        {textI}
      </div>)
    }
  </div>
}

export default HistoryList