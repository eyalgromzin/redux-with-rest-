import React, { useLayoutEffect, useEffect, useState, useCallback, useMemo, useRef } from "react";
import styles from './searchButton.module.css'
import {
  selectSearchText,
  setSearchResults,
  addToHistory,
} from '../../redux/searchSlice';
import { useSelector, useDispatch } from 'react-redux';

const HistoryList = () => {
  return <div>HistoryList</div>
}