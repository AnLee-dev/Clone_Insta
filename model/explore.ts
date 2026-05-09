import { TComment } from "./comment";

export type TExplore = {
  id: string;
  postId: string,
  media: TExploreMedia[],
  likeCount: number,
  comment: TExploreComment[],
};

export type TExploreMedia = {
  mediaUrl: string;
  poster: string;
};

export type TExploreComment = {
  id: string;
  comment_like_count: number;
};
