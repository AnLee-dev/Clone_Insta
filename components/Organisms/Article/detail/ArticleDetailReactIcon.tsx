import { useRef, useState } from "react";
import { INewFeed } from "../../../../model/newFeed";
import { PostTime } from "../../../Molecules/Article/PostTime";
import { Like } from "../Like";
import { ReactArticle } from "../ReactArticle";
import { useOnClickOutside } from "../../../../hooks/useClickOutSide";
import { EMOJI } from "../../../../config/emoji";
import * as ICON from "@/assets/svg";
interface IProps {
  item: INewFeed;
}
export const ArticleDetailReactIcon = ({ item }: IProps): JSX.Element => {
  const [hasChange, setHasChange] = useState(false);
  const [isShowEmoji, setIsShowEmoji] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const settingRef = useRef(null);
  const toggle = () => {
    setIsShowDetail((prev) => !prev);
  };
  useOnClickOutside(settingRef, () => setIsShowEmoji(false));

  const [textareaheight, setTextareaheight] = useState(1);

  function handleChange(event: any) {
    const height = event.target.scrollHeight;
    const rowHeight = 13;
    const trows = Math.floor(height / rowHeight);

    if (trows > textareaheight && trows < 5) {
      setTextareaheight(trows);
    }
  }

  return (
    <div className="h-[170px] w-full px-[16px] flex flex-col !justify-between">
      <div>
        <div className="flex items-center justify-center">
          <ReactArticle item={item} />
        </div>
        <div className="py-[6px]">
          <Like like={item?.like_count} />
          <PostTime time={item?.created_at} />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <button
            className="flex items-center justify-center"
            onClick={() => setIsShowEmoji((prev) => !prev)}
          >
            <ICON.Emoji />
          </button>
          <div className="w-[75%]">
            <textarea
              placeholder="Thêm bình luận"
              className="w-full resize-none text-[14px] outline-none placeholder:text-[14px]"
              rows={textareaheight}
              onChange={(event) => {
                event.target.value ? setHasChange(true) : setHasChange(false);
                handleChange(event);
              }}
            />
          </div>
          <div className="flex">
            {hasChange && (
              <button>
                <span className="text-[14px] font-semibold text-c5">Đăng</span>
              </button>
            )}
          </div>
          <div className="relative flex">
            {isShowEmoji && (
              <div
                ref={settingRef}
                className="absolute bottom-[50px] left-[-20px] h-[333px] w-[325px] overflow-y-auto rounded-lg bg-c2 p-[10px] drop-shadow-xl"
              >
                {EMOJI.map((item, idx) => (
                  <div className="flex flex-col" key={idx}>
                    <div className="text-[14px] font-semibold text-c3">
                      {item.label}
                    </div>
                    <div className="grid grid-cols-7">
                      {item.icons.map((i, idx) => (
                        <div className="flex text-[32px]" key={idx}>
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
