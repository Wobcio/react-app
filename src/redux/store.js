import { isCursorAtStart } from '@testing-library/user-event/dist/utils';
import { createStore, combineReducers } from 'redux';
import cardsReducer from './cardsRedux';
import columnsReducer from './columnsRedux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import searchStringReducer from './searchStringRedux';


const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;