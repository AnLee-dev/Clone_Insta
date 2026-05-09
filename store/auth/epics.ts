import { Epic, ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { AxiosError } from 'axios';
import { AuthAction, LOGIN_REQUEST, loginSuccess, loginFailure } from './actions';
import { LoginResponse } from '../../model/auth';
import axiosInstance from '../../hooks/axiosInstance';
import { RootState } from '..';

export const loginEpic: Epic<AuthAction, AuthAction, RootState> = (action$) =>
  action$.pipe(
    ofType(LOGIN_REQUEST),

    switchMap(({ payload: { email, password } }) =>
      from(
        axiosInstance.post<LoginResponse>('/auth/login', { email, password })
      ).pipe(
        map(({ data }) => {
          document.cookie = `token=${data.tokens.access.token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
          
          document.cookie = `refreshToken=${data.tokens.refresh.token}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Strict`;
          return loginSuccess(data.tokens.access.token);
        }),
        catchError((error: AxiosError<{ message: string}>) => {
          const message =
            error.response?.data?.message || 'Đăng nhập thất bại, thử lại sau';
          return of(loginFailure(message));
        })
      )
    )
  );