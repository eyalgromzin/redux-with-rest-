import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
  lastSearchedText: '',
  searchResults: [],
  history: [],
  maxIndixToShow: 0,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchResults',
//   async (results) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const counterSlice = createSlice({
  name: 'search',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setLastSearchedText: (state, action) => {
      state.lastSearchedText = action.payload;
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    addToHistory: (state, action) => {
      state.history.push(action.payload)
    },
  },
});

export const { increment, setSearchText, setSearchResults, setHistory, setLastSearchedText, setMaxIndexToShow, addToHistory, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSearchText = (state) => {
  return state.search.searchText;
}

export const selectLastSearchedText = (state) => {
  return state.search.lastSearchedText;
}

export const selectResults = (state) => {
  return state.search.searchResults;
}

export const selectHistory = (state) => {
  return state.search.history;
}

export const selectMaxIndexToShow = (state) => {
  return state.search.maxIndixToShow;
}


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default counterSlice.reducer;
