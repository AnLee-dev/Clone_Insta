import React, { useState } from "react";
import { Caption } from "../../Caption";
import { PostTime } from "@/components/Molecules/Article/PostTime";
import { CommentDetail } from "../CommentDetail";
import { INewFeed } from "@/model/newFeed";
import * as ICON from "@/assets/svg";
import { AccountAvt } from "@/components/Molecules/Article/AccountAvt";

interface IProp {
  item: INewFeed;
}
export const MobileComment = ({ item }: IProp): JSX.Element => {
  const [hasChange, setHasChange] = useState(false);

  return (
    <div className="   h-[100vh] w-[100vw]">
      <div className="h-[44px] px-[16px] flex justify-between">
        <div className="flex justify-center items-center -rotate-90">
          <ICON.BackIcon />
        </div>
        <div className="flex justify-center items-center">Bình luận</div>
        <div className="flex justify-center items-center">
          <ICON.ShareIcon />
        </div>
      </div>
      <div className="py-[8px] px-[16px] flex justify-between bg-c9">
        <div className="w-[20%]">
          <AccountAvt src={item.user.profile_pic_url} />
        </div>
        <div className="relative w-[80%] flex justify-center items-center">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Thêm bình luận..."
            name="comment"
            onChange={(event) => {
              event.target.value ? setHasChange(true) : setHasChange(false);
            }}
          />
          {hasChange ? (
            <button className="absolute right-[8%] text-c5">Đăng</button>
          ) : (
            <button className="absolute right-[8%] text-c5 opacity-50">Đăng</button>
          )}
        </div>
      </div>
      <div className="mb:block md:hidden p-[16px] w-full h-[100%] overflow-auto scrollbar bg-c2">
        <div className="mb-[16px] flex w-full items-center justify-center">
          <div className="flex w-full">
            <div className="ml-[10px] w-[80%] items-center">
              <div className="w-full">
                <Caption
                  nickName={item.user.username}
                  caption={item.caption_text}
                />
              </div>
              <div>
                <PostTime time={item.created_at} className="!text-[12px]" />
              </div>
            </div>
          </div>
        </div>

        <CommentDetail item={item} />
      </div>
    </div>
  );
};
