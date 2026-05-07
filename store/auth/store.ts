import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics, Epic } from 'redux-observable';
import { authReducer } from './reducer';
import { AuthAction } from './actions';
import { AuthState } from '@/model/auth/types';
import { loginEpic } from './epics';

// ✅ Khai báo rõ type cho Epic
type RootEpic = Epic<AuthAction, AuthAction, AuthState>;

const epicMiddleware = createEpicMiddleware<AuthAction, AuthAction, AuthState>();

const rootEpic: RootEpic = combineEpics(loginEpic);

export const store = createStore(authReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;