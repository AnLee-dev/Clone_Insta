/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef } from "react";
import Video from "./Video";
import { useAppSelector } from "@/store/hooks";
import { useKeenSlider } from "keen-slider/react";

export const Reel = () => {
  const reels = useAppSelector((state) => state.reels.data);
  const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      origin: "auto",
      perView: 1,
      spacing: 10,
    },
    vertical: true,
  });

const useKey = (key: any, cb: any) => {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb
  })
  useEffect(() => {
    const handle = (e: any) => {
      if(e.code === key){
        callbackRef.current(e)
      }
    }
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle)
  }, [key]);
}
const handleSpace = () => {
  console.log('space here');
}
useKey("Enter", handleSpace)
  return (
    <div className="h-screen lg:w-[calc(100%-71px)] lg:ml-[71px] xl:w-[calc(100%-250px)] xl:ml-[250px] 2xl:w-[calc(100%-336px)] 2xl:ml-[336px] ssm:w-[100%] md:w-[100%]">
    <div className="h-screen w-full flex justify-center items-center flex-wrap" ref={sliderRef}>
      {reels.map((reel, idx) => (
        <Video key={idx} reel={reel} sliderRef={sliderRef}/>
      ))}
    </div>
    </div>
  );
};
