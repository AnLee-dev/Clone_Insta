import { useRef, useState } from "react";
import { INewFeed } from "../../../../model/newFeed";
import { PostTime } from "../../../Molecules/Article/PostTime";
import { Like } from "../Like";
import { ReactArticle } from "../ReactArticle";
import { useOnClickOutside } from "../../../../hooks/useClickOutSide";
import { EMOJI } from "../../../../config/emoji";

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
  
  function handleChange(event:any) { 
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
        <ReactArticle />
      </div>
      <div className="py-[6px]">
        <Like like={item.like_count} />
        <PostTime time={item.created_at} />
      </div>
      </div>
      <div>
        <div className="flex justify-between">
          <button
            className="flex items-center justify-center"
            onClick={() => setIsShowEmoji((prev) => !prev)}
          >
            <svg
              aria-label="Biểu tượng cảm xúc"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
            </svg>
          </button>
          <div className="w-[75%]">
            <textarea
              placeholder="Thêm bình luận"
              className="w-full resize-none text-[14px] outline-none placeholder:text-[14px]"
              rows={textareaheight}
              onChange={(event) =>{
                event.target.value ? setHasChange(true) : setHasChange(false)
                handleChange(event)
              }
              }

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
