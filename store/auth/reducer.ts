import { AuthState } from '@/model/auth';
import { AuthAction, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload.token };

    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};