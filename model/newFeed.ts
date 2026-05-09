import { TUser } from "./user"
import { TComment } from "./comment"

export type INewFeed = {
    id: string;
    created_at: string;
    location?: TLocation;
    comments: TComment[];
    carousel_media: TCarouselMedia;
    user: TUser;
    like_count: number;
    has_liked: boolean;
    caption_text: string;
    is_seen: boolean;
    tags?: string[];
    is_saved: boolean;
  }
  
  export type TLocation = {
    short_name: string
  }
  export type TCarouselMedia = {
    images: TImages[]
    videos: TVideo[]
  }
  
  export type TVideo = {
    id: number
    src: string
    poster: string
  }

  export type TImages = {
    id: number
    src: string
    poster: string
  }
  