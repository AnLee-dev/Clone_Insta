
import  { TUser }  from "./user"

export type TReels = {
  id: string;
  user: TUser;
  caption_text: string;
  like_count: number;
  total_comment: number;
  media: TMedia;
  hasLike: boolean;
  createdAt: Date;
};

export type TMedia = {
    video: TVideo[];
};

export type TVideo = {
    id: string;
    src: string;
    poster: string;
}
