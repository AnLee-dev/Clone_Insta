import { TUser } from "../user";
import { TComment } from "./comment";

export type TPost = {
  userId: TUser;
  media: [
    {
      mediaUrl: string;
      poster: string;
      id: string
    },
  ];
  likeCount: number;
  comment: [];
  captionText: string;
  hasLike: boolean;
  createdAt: string,
  updatedAt: string,
  id: string
};
