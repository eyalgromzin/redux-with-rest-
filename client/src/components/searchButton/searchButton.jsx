import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";


const SearchButton = ({text}) => {
  const search = async () => {
    let results = await getResultsFromWeb(text)

    
  }

  return <div className={styles.searchButton} onClick={search}>
    Go
  </div>
}