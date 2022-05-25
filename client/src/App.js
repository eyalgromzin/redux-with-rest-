import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import logo from './logo.svg';
import { Counter } from './redux/Counter';
import './App.css';
import SearchField from "./components/searchField/searchField";

function App() {
  const [results, setResults] = useState()

  return <div>
    <SearchField setResults={setResults} />

    <Results results={results} />
  </div>
}

export default App;
