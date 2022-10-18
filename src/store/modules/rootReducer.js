import { combineReducers } from 'redux';

import page from './page/slice';
import sidebar from './sidebar/slice';

const appReducer = combineReducers({
  page,
  sidebar,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
