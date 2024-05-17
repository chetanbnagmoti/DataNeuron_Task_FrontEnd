import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import userReducer from './redux/reducers/user.reducer';

const rootReducer = combineReducers({
  userList: userReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  middleware
);

export default store;
