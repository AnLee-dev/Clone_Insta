/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment, useEffect, useState } from "react";
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
  return (
    <div className="keen-slider h-screen w-full" ref={sliderRef}>
      {reels.map((reel, idx) => (
        <Video key={idx} reel={reel} sliderRef={sliderRef}/>
      ))}
    </div>
  );
};
