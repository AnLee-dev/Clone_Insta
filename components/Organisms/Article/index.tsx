import { Fragment } from "react";
import { Caption } from "./Caption";
import { Carousel } from "./Carousel";
import { Comments } from "./Comments";
import { HeaderArticle } from "./HeaderArticle";
import { Like } from "./Like";
import { ReactArticle } from "./ReactArticle";
import { useAppSelector } from "../../../store/hooks";

export const Article = () => {
  const newFeeds = useAppSelector((state) => (state.newFeed.data))

  return (
    <div className="w-full">
      {newFeeds.map((item, idx) => (
        <Fragment key={idx}>
          <HeaderArticle
            accountImage={item.user.profile_pic_url}
            nickName={item.user.username}
            timePost={item.created_at}
          />
          <Carousel item={item} />
          <div className="w-full">
            <ReactArticle />
            <Like like={item.like_count} />
            <Caption nickName={item.user.username} caption={item.caption_text} />
            <Comments item={item} />
          </div>
          <hr className="mb-[20px]"/>
        </Fragment>
      ))}

    </div>
  );
};
