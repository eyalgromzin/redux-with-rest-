import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import logo from './logo.svg';
import { Counter } from './redux/Counter';
import styles from './App.module.css';
import SearchField from "./components/searchField/searchField";
import SearchButton from "./components/searchButton/searchButton";
import Results from "./components/results/results";
import { useSelector, useDispatch } from 'react-redux';
import {loadHistory} from './components/history'
import { selectHistory, setHistory } from "./redux/searchSlice";

function App() {
  const [results, setResults] = useState()
  const dispatch = useDispatch()

  const history = useSelector(selectHistory)

  const loadHistoryFromStorage = async () => {
    const history = await loadHistory()

    dispatch(setHistory(history))
  }

  useEffect(() => {
    loadHistoryFromStorage()
  }, [])
  
  return <div className={styles.mainPage}>
    { history && history.length > 0 && 
      <div className={styles.sideBar}>
        <Results />
      </div>
    }
    <div className={styles.mainContent}>
      <SearchField setResults={setResults} />

      <SearchButton />

      <Results results={results} />
    </div>
  </div>
}

export default App;
