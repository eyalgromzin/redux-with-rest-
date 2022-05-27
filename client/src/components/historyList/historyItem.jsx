import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from './historyList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchText
} from '../../redux/searchSlice';
import {search} from '../common'

const HistoryItem = ({text, i}) => {
  const dispatch = useDispatch()

  
  const onItemClick = () => {
    dispatch(setSearchText(text))

    search(dispatch, text, false)
  }

  return <div className={styles.historyRow} onClick={onItemClick} key={i}>
    {text}
  </div>
}

export default HistoryItem