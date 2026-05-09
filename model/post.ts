import { TUser } from "./user";
import { TComment } from "./comment";

export type TPost = {
  userId: TUser;
  media: TMedia[];
  likeCount: number;
  comment: TComment[];
  captionText: string;
  hasLike: boolean;
  location?: string;
  tags?: string[]; 
  isSaved?: boolean; 
  createdAt: string,
  updatedAt: string,
  id: string
};

export type TMedia = {
  mediaUrl: string;
  poster: string;
  id: string
}
