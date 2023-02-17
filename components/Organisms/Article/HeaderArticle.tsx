import React, { useRef, useState } from "react";
import { AccountAvt } from "../../Molecules/Article/AccountAvt";
import { NickName } from "../../Molecules/Article/NickName";
import { PostTime } from "../../Molecules/Article/PostTime";
import { Options } from "../../Molecules/Options/Options";
import { useOnClickOutside } from "../../../hooks/useClickOutSide";
export interface IProps {
  accountImage: string;
  nickName: string;
  timePost: string;
}
export const HeaderArticle = ({
  accountImage,
  nickName,
  timePost,
}: IProps): JSX.Element => {
  const settingRef = useRef(null);
  const [check, setCheck] = useState(false);
  const toggle = () => {
    setCheck((prev) => !prev);
  };
  useOnClickOutside(settingRef, () => setCheck(false));
  return (
    <div className="h-[56px] w-full">
      <div className="flex justify-between">
        <div className="flex w-[90%]">
          <div className="ssm:w-[15%] sm:w-[10%]">
            <AccountAvt src={accountImage} />
          </div>
          <div className="ml-[10px] flex w-[88%] items-center truncate">
            <div>
              <NickName nickName={nickName} />
            </div>
            <span className="mx-[4px] text-c3">•</span>
            <div>
              <PostTime time={timePost} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mb:w-[15%] sm:w-[8.5%]">
          <div className="flex w-full justify-end" onClick={toggle}>
            <svg
              aria-label="Tùy chọn khác"
              className="ml-[16px] cursor-pointer hover:fill-neutral-400"
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

          {check && <Options settingRef={settingRef} setCheck={setCheck} />}
        </div>
      </div>
    </div>
  );
};
