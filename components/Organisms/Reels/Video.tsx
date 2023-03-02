import { AccountAvt } from "@/components/Molecules/Article/AccountAvt";
import { NickName } from "@/components/Molecules/Article/NickName";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import { TReels } from "@/model/reels";
import React, { useEffect, useRef, useState } from "react";

export interface IProps {
  reel: TReels;
  sliderRef: (node: HTMLElement | null) => void;
}
export const Video = ({ reel, sliderRef }: IProps): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  useEffect(() => {
    console.log("loaded", isVisible);
    const videoEl = videoRef.current;
    isVisible ? videoEl?.play() : videoEl?.pause();
  }, [isVisible, loaded]);

  return (
    <div className="keen-slider__slide w-full h-screen lg:w-[calc(100vw-71px)] mb:w-[90%] md:w-[100%] flex justify-center items-center">
      <div
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className="mb:w-[100%] h-[85%] md:h-[100%] md:w-[670px] w-full flex justify-center items-center rounded-lg relative md:bg-slate-500"
      >
        <div className="w-[35%] left-[20px] absolute bottom-[60px] flex justify-center items-center gap-2">
          <AccountAvt src={reel.user.profile_pic_url} />
          <div className="flex gap-2 justify-center items-center mb:flex-col lg:flex-row">
            <NickName nickName={reel.user.username} className="text-c2" />
            <div className="h-[30px] bg-white flex justify-center items-center rounded-lg w-[90px] opacity-50">
              <button className="text-c4">Theo dõi</button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[90%] flex justify-center items-center">
          <video
            ref={videoRef}
            id="video"
            className="w-[100%] h-[100%]"
            src={reel.media.video[0].src}
            autoPlay={true}
            muted={!isVisible}
            controls
            loop
            controlsList="nofullscreen"
          ></video>
        </div>
        <div className="w-[10%] h-[100px] absolute bottom-[200px] right-[20px]">
          <div className="items-center justify-between h-[100px]">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1 justify-center items-center">
                <span className="">
                  <svg
                    aria-label="Thích"
                    className="_ab6-"
                    color="#262626"
                    fill="#FFFFFF"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                  </svg>
                </span>
                <p className="truncate">{20} N</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
                <span className="">
                  <svg
                    aria-label="Bình luận"
                    className="_ab6-"
                    color="#262626"
                    fill="#FFFFFF"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </span>
                <p className="truncate">{600}</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
                <span className="">
                  <svg
                    aria-label="Chia sẻ bài viết"
                    className="_ab6-"
                    color="#262626"
                    fill="#FFFFFF"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>
                  </svg>
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
