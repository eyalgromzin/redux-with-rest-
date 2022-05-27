import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from "./results.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchText,
  selectResults,
  selectLastSearchText
} from '../../redux/searchSlice';

const ResultsHistory = () => {
  const lastSearchText = useSelector(selectLastSearchText);   
  const results = useSelector(selectResults);

  

  return <div>
    {
      results.map(resultI => <div>
        {
          <div className={styles.resultRow}>
            <div>{resultI.title}</div>
            <div>{resultI.url}</div>
          </div>
        }
      </div>)
    }
  </div>
}

export default ResultsHistory