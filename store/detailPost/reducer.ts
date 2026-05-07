import { PostActionTypes, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './actions';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  username: string;
}

interface PostState {
  post: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  post: null,
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action: PostActionTypes): PostState => {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return { ...state, post: action.payload.postData, loading: false, error: null };
    case FETCH_POST_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
