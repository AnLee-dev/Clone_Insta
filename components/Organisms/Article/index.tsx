import { Fragment } from "react";
import { Caption } from "./Caption";
import { Carousel } from "./Carousel";
import { Comments } from "./Comments";
import { HeaderArticle } from "./HeaderArticle";
import { Like } from "./Like";
import { ReactArticle } from "./ReactArticle";
import { INewFeed } from "@/model/newFeed";

interface IProp {
  article: INewFeed[];
}
export const Article = ({ article }: IProp) => {

  return (
    <div className="w-full">
      {article.map((item, idx) => (
        <Fragment key={idx}>
          <HeaderArticle
            accountImage={item.user.profile_pic_url}
            nickName={item.user.username}
            timePost={item.created_at}
          />
          <Carousel item={item} />
          <div className="w-full">
            <ReactArticle item={item} />
            <Like like={item.like_count} />
            <Caption
              nickName={item.user.username}
              caption={item.caption_text}
            />
            <Comments item={item} />
          </div>
          <hr className="mb-[20px]" />
        </Fragment>
      ))}
    </div>
  );
};
