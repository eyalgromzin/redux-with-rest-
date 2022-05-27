import React, { useEffect, useState } from "react";
import styles from './App.module.css';
import SearchField from "./components/searchField/searchField";
import SearchButton from "./components/searchButton/searchButton";
import Results from "./components/resultsHistory/results";
import HistoryList from "./components/historyList/historyList";
import { useSelector, useDispatch } from 'react-redux';
import { selectHistory, setHistory } from "./redux/searchSlice";
import {getHistory} from './api'

function App() {
  const [results, setResults] = useState()
  const dispatch = useDispatch()

  const history = useSelector(selectHistory)

  const loadHistoryFromServer = async () => {
    const history = await getHistory()

    dispatch(setHistory(history.data))
  }

  useEffect(() => {
    loadHistoryFromServer()
  }, [])
  
  return <div className={styles.mainPage}>
    { history && history.length > 0 && 
      <div className={styles.sideBar}>
        <HistoryList />
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
