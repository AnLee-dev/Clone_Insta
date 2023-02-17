import { useRef, useState } from "react";
import { EMOJI } from "../../../config/emoji";
import { useOnClickOutside } from "../../../hooks/useClickOutSide";
import { ArticleDetail } from "./detail";
import { INewFeed } from "../../../model/newFeed";
export interface IProps {
  item: INewFeed;
}
export const Comments = ({ item }: IProps): JSX.Element => {
  const [hasChange, setHasChange] = useState(false);
  const [isShowEmoji, setIsShowEmoji] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const settingRef = useRef(null);
  const toggle = () => {
    setIsShowDetail((prev) => !prev);
  }
  useOnClickOutside(settingRef, () => setIsShowEmoji(false));
  
  return (
    <div className="mt-[10px] w-full">
      <div className="">
        {item.comments.length > 0 && (
          <div className="cursor-pointer">
            <span onClick={toggle}>Xem tất cả {item.comments.length} bình luận</span>
            {isShowDetail && (
              <ArticleDetail
                item={item}
                setIsShowDetail={setIsShowDetail}
                settingRef={settingRef}
              />
            )}
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <div className="w-[85%]">
          <textarea
            placeholder="Thêm bình luận"
            className="w-full resize-none text-[14px] outline-none placeholder:text-[14px]"
            rows={2}
            onChange={(event) =>
              event.target.value ? setHasChange(true) : setHasChange(false)
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
            <div ref={settingRef} className="absolute bottom-[50px] left-[-20px] h-[333px] w-[325px] overflow-y-auto rounded-lg bg-c2 p-[10px] drop-shadow-xl">
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
        <button className="flex justify-center items-center" onClick={() => setIsShowEmoji((prev) => !prev)}>
            <svg
              aria-label="Biểu tượng cảm xúc"
              className="mt-[5px]"
              color="#c7c7c7"
              fill="#c7c7c7"
              height="13"
              role="img"
              viewBox="0 0 24 24"
              width="13"
            >
              <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
            </svg>
            
          </button>
      </div>
    </div>
  );
};
