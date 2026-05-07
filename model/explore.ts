export type TExplore = {
  postId: string,
  media: [
    {
      mediaUrl: {
        type: string,
        required: true,
      },
      poster: {
        type: string,
        required: true,
        default: '',
      },
    },
  ],
  likeCount: {
    type: number,
    default: 0,
    required: false,
  },
  comment: Comment[],
};

export type Comment = {
  comment_like_count: number
  id: string
}
