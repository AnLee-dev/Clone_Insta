import { Fragment } from "react";
import { Caption } from "./Caption";
import { Carousel } from "./Carousel";
import { Comments } from "./Comments";
import { HeaderArticle } from "./HeaderArticle";
import { Like } from "./Like";
import { ReactArticle } from "./ReactArticle";
import { TPost } from "../../../model/post";

interface IProp {
  post: TPost[];
}
export const Article = ({ post }: IProp) => {
  const postData = Array.isArray(post) ? post : [];
  console.log("Data TPost: ", postData)

  if (!postData.length) {
    return <div>Không có bài viết nào</div>
  }
  return (
    <div className="w-full">
      { postData.map((item, idx) => (
        <Fragment key={idx}>
          <HeaderArticle
            accountImage={item?.userId?.profilePicUrl}
            nickName={item?.userId?.userName}
            timePost={item?.createdAt.toString()}
          />
          <Carousel item={item} />
          <div className="w-full">
            <ReactArticle item={item} />
            <Like like={item?.likeCount} />
            <Caption
              nickName={item?.userId?.userName}
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
