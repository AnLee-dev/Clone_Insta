import { INewFeed } from "@/model/newFeed";
import { toogleLike } from "@/store/actionCreator/feed";
import { useAppDispatch } from "@/store/hooks";
import * as ICON from "@/assets/svg";
import Link from "next/link";
import { TPost } from "@/model/post/post";
interface IProp {
  item: TPost;
}
export const ReactArticle = ({ item }: IProp): JSX.Element => {
  const dispatch = useAppDispatch();
  const fetchCarousel = () => dispatch(toogleLike(item?._id));
  return (
    <div className="w-full h-[46px]">
      <div className="flex items-center justify-between h-[46px]">
        <div className="flex items-center">
          {item?.has_liked ? (
            <span className="w-[46px]" onClick={fetchCarousel}>
              <ICON.HeartIconLike />
            </span>
          ) : (
            <span className="w-[46px]" onClick={fetchCarousel}>
              <ICON.HeartIconUnmount />
            </span>
          )}
          <Link href="/">
            <span className="w-[46px]">
              <ICON.ChatIcon />
            </span>
          </Link>
          <span className="w-[46px]">
            <ICON.ShareIcon />
          </span>
        </div>
        <div>
          <span>
            <ICON.SaveIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
