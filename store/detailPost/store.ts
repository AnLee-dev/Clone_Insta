import { createStore, applyMiddleware, combineReducers } from 'redux';
import { postReducer } from './reducer';
import { createEpicMiddleware } from 'redux-observable';
import { fetchPostEpic } from './epic';

const rootReducer = combineReducers({
  post: postReducer,
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(fetchPostEpic);

export default store;
