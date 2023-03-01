export type TReels = {
  user: TUser;
  caption_text: string;
  like_count: number;
  total_comment: number;
  media: TMedia;
  id: number;
};

export type TUser = {
  id: string;
  username: string;
  full_name: string;
  profile_pic_url: string;
  friendship_status: TFriendship;
};
export type TMedia = {
    video: TVideo[];
};

export type TVideo = {
    id: number;
    src: string;
    poster: string;
}
export type TFriendship = {
  following: boolean;
  outgoing_request: boolean;
};
