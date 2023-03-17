import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../../hooks/useClickOutSide";
import { AccountAvt } from "../../../Molecules/Article/AccountAvt";
import { NickName } from "../../../Molecules/Article/NickName";
import { Options } from "../../../Molecules/Options/Options";
import { PostTime } from "../../../Molecules/Article/PostTime";
import { Caption } from "../Caption";
import { CommentDetail } from "./CommentDetail";
import { INewFeed } from "../../../../model/newFeed";
import { ArticleDetailReactIcon } from "./ArticleDetailReactIcon";
interface IProps {
  item: INewFeed;
  settingRef: React.MutableRefObject<null>;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  check: boolean;
}
export const ArticleDetailComment = ({ item }: IProps): JSX.Element => {
  const settingRef = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const toggle = () => {
    setIsShowOptions((prev) => !prev);
  };
  useOnClickOutside(settingRef, () => setIsShowOptions(false));

  return (
    <div className="h-[100%] w-[45%]">
      <div className="flex h-[60px] w-full items-center justify-between border-b-[1px] py-[14px] pl-[16px]">
        <div className="flex w-[90%]">
          <div className="ssm:w-[15%] sm:w-[10%]">
            <AccountAvt src={item?.user.profile_pic_url} />
          </div>
          <div className="ml-[10px] flex w-[88%] items-center truncate">
            <div>
              <NickName nickName={item?.user.username} />
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-end mb:w-[15%] sm:w-[8.5%]">
          <div className="flex w-full justify-start" onClick={toggle}>
            <svg
              aria-label="Tùy chọn khác"
              className="cursor-pointer hover:fill-neutral-400"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>

          {isShowOptions && (
            <Options settingRef={settingRef} setCheck={setIsShowOptions} />
          )}
        </div>
      </div>
      <div className="p-[16px] w-full h-[65%] overflow-auto scrollbar">
        <div className="mb-[16px] flex w-full items-center justify-center">
          <div className="flex w-full">
            <div className="ssm:w-[15%] sm:w-[10%]">
              <AccountAvt src={item?.user.profile_pic_url} />
            </div>
            <div className="ml-[10px] w-[80%] items-center">
              <div className="w-full">
                <Caption
                  nickName={item?.user.username}
                  caption={item?.caption_text}
                />
              </div>
              <div>
                <PostTime time={item?.created_at} className="!text-[12px]" />
              </div>
            </div>
          </div>
        </div>

        <CommentDetail item={item} />
      </div>
        <ArticleDetailReactIcon item={item}/>
    </div>
  );
};

export default ArticleDetailComment;
