<<<<<<< HEAD
import {createStore, applyMiddleware, combineReducers} from 'redux';
import authReducer from './auth/auth.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
  });
  const store = createStore(rootReducer, applyMiddleware(thunk));

=======
import {createStore, applyMiddleware, combineReducers} from 'redux';
import authReducer from './auth/auth.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
  });
  const store = createStore(rootReducer, applyMiddleware(thunk));

>>>>>>> 5a8bf53c4354c48e3ab8eacf0822f7cc83513786
  export default store;