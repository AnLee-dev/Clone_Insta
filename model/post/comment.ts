import { TUser } from "../user"
import { TPost } from "./post";

export type TComment = {
    user: TUser;
    post: TPost;
    comment_text: string;
    like_count: number;
    total_reply_comment: number;
    reply_comments: [
      {
        comment: TReplyComment[];
      }
    ];
    create_at: Date;
    update_at: Date;
}

export type TReplyComment = {
    user: TUser[];
    post: TPost;
    comment_text: string;
    like_count: number;
    total_reply_comment: number;
    create_at: Date;
    update_at: Date;
}

