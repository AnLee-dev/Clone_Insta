import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { FETCH_POST_REQUEST, fetchPostSuccess, fetchPostFailure } from './actions';
import { ofType } from 'redux-observable';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  username: string;
}

// Giả lập API call
const fetchInstagramPost = (postId: string): Promise<InstagramPost> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId === '1') {
        resolve({
          id: '1',
          imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2Vs64GNedqx2I8bxHFbdLH&ust=1733230439129000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjBjdyQiYoDFQAAAAAdAAAAABAE',
          caption: 'A beautiful sunset!',
          username: 'john_doe',
        });
      } else {
        reject('Post not found');
      }
    }, 1000);
  });
};

export const fetchPostEpic: Epic = (action$) =>
  action$.pipe(
    ofType(FETCH_POST_REQUEST),
    mergeMap((action: any) =>
      fetchInstagramPost(action.payload.postId).pipe(
        map((postData) => fetchPostSuccess(postData)),
        catchError((error) => of(fetchPostFailure(error)))
      )
    )
  );
