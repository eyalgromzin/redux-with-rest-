import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from "./results.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchText,
  selectResults,
  selectLastSearchedText,
  selectMaxIndexToShow
} from '../../redux/searchSlice';
import { PAGE_SIZE } from '../../constants'

const Results = () => {
  const [maxIndexToShow, setMaxIndexToShow] = useState(PAGE_SIZE)
  const lastSearchedText = useSelector(selectLastSearchedText);   
  const results = useSelector(selectResults);

  let resultsToShow = results.slice(0, maxIndexToShow);

  if(lastSearchedText){
    let f = 4
  }

  const createResultText = (text, wordToHighlight) => {
    let parts = text.split(new RegExp(wordToHighlight, 'i'))

    let partsWithSearchedText = []
    parts.forEach((partI, i) => {
      partsWithSearchedText.push(partI)
      if(i !== parts.length - 1){
        partsWithSearchedText.push(wordToHighlight)
      }
    })
    
    return <div>
      {
        partsWithSearchedText.map((partI, i) => {
          if(partI === wordToHighlight){
            return <span className={styles.highlighted} key={i}>{partI} </span>
          }else{
            return <span key={i}> {partI}</span>
          }
        })
      }
    </div>
  }

  return <div>
    {
      resultsToShow.map(resultI => <div key={resultI.text + resultI.url}>
        {
          <div className={styles.resultRow} >
            <div className={styles.resultTitle}>{createResultText(resultI.text, lastSearchedText)}</div>
            <div className={styles.resultUrl}>{resultI.url}</div>
          </div>
        }
      </div>)
    }

    { 
      results && results.length > 0 && 
      <div className={styles.showMoreButton} onClick={() => setMaxIndexToShow(maxIndexToShow + PAGE_SIZE)}>
        show more 
      </div>
    }
    {
      results && results.length == 0 && lastSearchedText &&
      <div>no results found</div>
    }
  </div>
}

export default Results