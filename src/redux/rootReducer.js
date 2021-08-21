//libs
import { combineReducers } from 'redux';
//reducers slice
import appReducer from 'redux/app/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
