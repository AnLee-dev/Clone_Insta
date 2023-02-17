export type INewFeed = {
    created_at: string
    id: string
    location: Location
    comments: Comment[]
    carousel_media: CarouselMedia
    user: User3
    like_count: number
    has_liked: boolean
    caption_text: string
    is_seen: boolean
    tags: string
    is_saved: boolean
  }
  
  export type Location = {
    short_name: string
  }
  
  export type Comment = {
    text: string
    created_at: string
    user: User
    comment_like_count: number
    reply: Reply[]
    id: string
  }
  
  export type User = {
    pk: number
    username: string
    full_name: string
    is_private: boolean
    profile_pic_url: string
  }
    
  export type User2 = {
    pk: number
    username: string
    full_name: string
    is_private: boolean
    profile_pic_url: string
  }
  
  export type User3 = {
    id: string
    username: string
    full_name: string
    profile_pic_url: string
    friendship_status: FriendshipStatus
  }

  export type Reply = {
    text: string
    created_at: string
    user: User2
    comment_like_count: number
  }
  
  export type CarouselMedia = {
    images: images[]
    videos: Video[]
  }
  
  export type Video = {
    id: number
    src: string
    poster: string
  }

  export type images = {
    id: number
    src: string
    poster: string
  }
  
  export type FriendshipStatus = {
    following: boolean
    outgoing_request: boolean
  }