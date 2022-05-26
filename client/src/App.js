import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import logo from './logo.svg';
import { Counter } from './redux/Counter';
import './App.css';
import SearchField from "./components/searchField/searchField";
import SearchButton from "./components/searchButton/searchButton";
import Results from "./components/results/results";

function App() {
  const [results, setResults] = useState()

  return <div>
    redux search app!!
    <SearchField setResults={setResults} />

    <SearchButton />

    <Results results={results} />
  </div>
}

export default App;
