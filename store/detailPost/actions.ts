export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

interface FetchPostRequestAction {
  type: typeof FETCH_POST_REQUEST;
  payload: { postId: string };
}

interface FetchPostSuccessAction {
  type: typeof FETCH_POST_SUCCESS;
  payload: { postData: string };
}

interface FetchPostFailureAction {
  type: typeof FETCH_POST_FAILURE;
  payload: { error: string };
}

export type PostActionTypes = 
  | FetchPostRequestAction
  | FetchPostSuccessAction
  | FetchPostFailureAction;

export const fetchPostRequest = (postId: string): FetchPostRequestAction => ({
  type: FETCH_POST_REQUEST,
  payload: { postId },
});

export const fetchPostSuccess = (postData: string): FetchPostSuccessAction => ({
  type: FETCH_POST_SUCCESS,
  payload: { postData },
});

export const fetchPostFailure = (error: string): FetchPostFailureAction => ({
  type: FETCH_POST_FAILURE,
  payload: { error },
});
