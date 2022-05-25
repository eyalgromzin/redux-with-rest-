import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from './searchButton.module.css'

const SearchButton = ({text}) => {
  const search = async () => {
    let results = await getResultsFromWeb(text)

    
  }

  return <div className={styles.searchButton} onClick={search}>
    Go
  </div>
}