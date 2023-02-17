import { configureStore,combineReducers } from '@reduxjs/toolkit';
import navReducer from './slice/nav'
import storiesReducer from './slice/stories'
import articlesReducer from './slice/article'
import accountUserReducer from './slice/switchAccounts'
import commentReducer from './slice/comment'
import newFeedReducer from './slice/new_feed'
const rootReducer = combineReducers({
    nav: navReducer,
    stories :storiesReducer,
    articles: articlesReducer,
    accountUser: accountUserReducer,
    comments: commentReducer,
    newFeed: newFeedReducer
})

export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
