import { AccountAvt } from "@/components/Molecules/Article/AccountAvt";
import { NickName } from "@/components/Molecules/Article/NickName";
import { TReels } from "@/model/reels";
import React from "react";
import * as ICON from "assets/svg";
export interface IProps {
  reel: TReels;
}
export const Video = ({ reel }: IProps): JSX.Element => {
  return (
    <div className="keen-slider__slide w-full h-[100vh] lg:w-[calc(100vw-71px)] mb:w-[100%] md:w-[100%] flex justify-center items-center">
      <div className=" w-full mb:w-[100%] md:w-[670px] h-[100vh] md:h-[95%] flex justify-center items-center rounded-lg relative ssm:bg-c3">
        <div className="w-[25%] absolute left-[20px] bottom-[100px] mb:flex-0 mb:justify-start md:left-0 lg:left-[22%] flex justify-center items-center gap-2">
          <AccountAvt src={reel.user.profile_pic_url} />
          <div className="flex gap-2 justify-center items-center md:flex-col-reverse lg:flex-row">
            <NickName nickName={reel.user.username} className="text-c2" />
            <div className="h-[30px] bg-white flex justify-center items-center rounded-lg w-[90px] opacity-50">
              <button className="text-c4">Theo dõi</button>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] 2xl:w-[60%] w-[100%] h-[100%] flex justify-center items-center">
          <video
            id="video"
            data-id-reel={reel.id}
            className="w-[100%] h-[100%] object-contain"
            src={reel?.media?.video[0]?.src}
            poster={reel?.media?.video[0]?.poster}
            autoPlay={true}
            muted={true}
            loop
          ></video>
        </div>
        <div className="w-[10%] h-[100px] absolute bottom-[200px] right-[40px]">
          <div className="items-center justify-between h-[100px]">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1 justify-center items-center">
                <span className="[&>svg]:fill-c2">
                  <ICON.HeartIconUnmount />
                </span>
                <p className="truncate text-c2">{20} N</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
                <span className="[&>svg]:text-c2">
                  <ICON.ChatIcon />
                </span>
                <p className="truncate text-c2">{600}</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
                <span className="[&>svg]:text-c2">
                  <ICON.ShareIcon />
                </span>
              </div>
              {/* <div className="flex flex-col gap-1 justify-center items-center">
                <span>
                  <svg
                    aria-label="Lưu"
                    className="_ab6-"
                    color="#262626"
                    fill="#FFFFFF"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>
                  </svg>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
