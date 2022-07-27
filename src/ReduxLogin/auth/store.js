import {createStore, applyMiddleware, combineReducers} from 'redux';
import authReducer from './auth/auth.reducer';
import videosReducer from '../vidActions/videos.reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    auth: authReducer,
    videos: videosReducer,
  });
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

  export default store;