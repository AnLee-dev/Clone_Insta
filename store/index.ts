import { configureStore,combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import navReducer from './slice/nav'
import storiesReducer from './slice/stories'
import accountUserReducer from './slice/switchAccounts'
import newFeedReducer from './slice/new_feed'
import exploreReducer from './slice/explore'
import reelsReducer from './slice/reels';
import tokenReducer from './slice/jwtToken';

const rootReducer = combineReducers({
    nav: navReducer,
    stories :storiesReducer,
    accountUser: accountUserReducer,
    newFeed: newFeedReducer,
    reels: reelsReducer,
    explore: exploreReducer,
    jwtTokens: tokenReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

const makeStore = () => store



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
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
