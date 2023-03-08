/* eslint-disable @next/next/no-img-element */
import React from "react";
import * as ICON from "@/assets/svg";
import { clsx } from "clsx";
interface IProps {
  src?: string | undefined;
  isBig?: boolean;
  id?: string;
  skeleton?: boolean;
}
export const DetailExplore = ({
  src,
  isBig,
  id,
  skeleton,
}: IProps): JSX.Element => {
  return (
    <div className={clsx("group relative aspect-square w-full cursor-pointer overflow-hidden", isBig && "!col-span-2 !row-span-2")}>
      <div className="h-full w-full object-cover duration-200 group-hover:scale-[1.1]">
        <img src={src} alt="Image explore" />
      </div>
      <div className="absolute inset-0 hidden items-center justify-center bg-black/20 backdrop-blur-[5px] duration-200 group-hover:flex">
        <div className="flex gap-[20px] text-c1 dark:text-c1 md:gap-[30px]">
          <div className="flex flex-col">
            <ICON.HeartIconUnmount />
            <span>{200}</span>
          </div>
          <div className="flex flex-col">
            <ICON.ChatIcon />
            <span>{200}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
