import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from "./results.css";
import { useSelector } from 'react-redux';

const SearchField = ({results, searchedText}) => {
  const search = async () => {
    let results = await getResultsFromWeb(text)

    dispatch(to redux)
  }

  const count = useSelector(selectResults);

  return <div>
    <input type='text' className={styles.searchInput} />

    <button onClick={search}
  </div>
}

export default SearchField