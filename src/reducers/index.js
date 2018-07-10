import { combineReducers } from 'redux';
import personalDataFormReducer from './personalDataFormReducer';
import tableReducer from './tableReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({
  personalDataFormReducer,
  tableReducer,
  notificationReducer
});
