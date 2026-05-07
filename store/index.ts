import { configureStore,combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import navReducer from './slice/nav'
import storiesReducer from './slice/stories'
import accountUserReducer from './slice/switchAccounts'
import newFeedReducer from './slice/posts'
import exploreReducer from './slice/explore'
import reelsReducer from './slice/reels';
import { authReducer } from './auth/reducer';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { loginEpic } from './auth/epics';
import { AuthAction } from './auth/actions';
import { AuthState } from '@/model/auth/types';

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    nav: navReducer,
    stories :storiesReducer,
    accountUser: accountUserReducer,
    newFeed: newFeedReducer,
    reels: reelsReducer,
    explore: exploreReducer,
    auth: authReducer,
})

const epicMiddleware = createEpicMiddleware<AuthAction, AuthAction, RootState>();


const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(epicMiddleware as any),
  });

  epicMiddleware.run(combineEpics(loginEpic));

  return store;
};

export const store = makeStore();


export type AppDispatch = typeof store.dispatch

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export const wrapper = createWrapper<AppStore>(makeStore);
