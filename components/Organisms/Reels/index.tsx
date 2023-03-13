import { useCallback, useEffect, useRef } from "react";
import Video from "./Video";
import { useKeenSlider } from "keen-slider/react";
import { TReels } from "@/model/reels";

interface IProp {
  reels: TReels[];
}
export const Reel = ({ reels }: IProp): JSX.Element => {
  const currentVideoOnScreen = useRef<HTMLVideoElement>();
  const observer = useRef<IntersectionObserver>();

  const containerVideoRefs = useRef<HTMLDivElement[]>([]);
  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 10,
    },
    vertical: true,
  });

  const kBListener = useCallback(
    (e: KeyboardEvent) => {
      switch (e.code) {
        case "ArrowUp":
          slider?.current!.prev();
          break;
        case "ArrowDown":
          slider?.current!.next();
          break;
        case "KeyM":
          currentVideoOnScreen.current!.muted =
            !currentVideoOnScreen.current!.muted;
          break;
        case "Space":
          currentVideoOnScreen.current!.paused
            ? currentVideoOnScreen.current!.play()
            : currentVideoOnScreen.current!.pause();
      }
    },
    [slider]
  );

  useEffect(() => {
    document.addEventListener("keydown", kBListener);
    return () => document.removeEventListener("keydown", kBListener);
  }, [kBListener]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentVideoOnScreen.current = entry.target as HTMLVideoElement;
            currentVideoOnScreen.current.currentTime = 0;
            currentVideoOnScreen.current.play();
          } else {
            (entry.target as HTMLVideoElement).pause();
          }
        });
      },
      {
        threshold: 1,
      }
    );
    containerVideoRefs.current.forEach((containVideoEl: HTMLDivElement) => {
      observer.current?.observe(
        containVideoEl.children[0].children[0].children[1].children[0]
      );
    });
    document.addEventListener("keydown", kBListener);
    return () => document.removeEventListener("keydown", kBListener);
  }, [kBListener]);

  const createRefs = useCallback((el, idx) => {
    containerVideoRefs.current[idx] = el;
  }, []);

  console.log('reel nho', reels);
  
  return (
    <div className="h-[100vh] overflow-hidden w-full lg:w-[calc(100%-71px)] lg:ml-[71px] xl:w-[calc(100%-250px)] xl:ml-[250px] 2xl:w-[calc(100%-336px)] 2xl:ml-[336px] ssm:w-[100%] md:w-[100%]">
      <div
        className="h-[100vh] w-full flex justify-center items-center flex-wrap"
        ref={sliderRef}
      >
        {reels.map((reel, idx) => (
          <div key={idx} ref={(el) => createRefs(el, idx)}>
            <Video reel={reel} />
          </div>
        ))}
      </div>
    </div>
  );
};
