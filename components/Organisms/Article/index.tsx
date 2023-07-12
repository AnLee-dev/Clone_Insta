import { Fragment } from "react";
import { Caption } from "./Caption";
import { Carousel } from "./Carousel";
import { Comments } from "./Comments";
import { HeaderArticle } from "./HeaderArticle";
import { Like } from "./Like";
import { ReactArticle } from "./ReactArticle";
import { TPost } from "@/model/post/post";

interface IProp {
  post: TPost[];
}
export const Article = ({ post }: IProp) => {

  return (
    <div className="w-full">
      { post.length && post?.map((item, idx) => (
        <Fragment key={idx}>
          <HeaderArticle
            accountImage={item?.userId[0]?.profilePicUrl}
            nickName={item?.userId[0].userName}
            timePost={item?.createdAt.toString()}
          />
          <Carousel item={item} />
          <div className="w-full">
            <ReactArticle item={item} />
            <Like like={item?.likeCount} />
            <Caption
              nickName={item?.userId[0].userName}
              caption={item?.captionText}
            />
            <Comments item={item} />
          </div>
          <hr className="mb-[20px]" />
        </Fragment>
      ))}
    </div>
  );
};
