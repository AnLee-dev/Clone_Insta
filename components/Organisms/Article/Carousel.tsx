/* eslint-disable @next/next/no-img-element */
"use client"
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { Arrow } from "../../Molecules/Arrow";
import { TPost } from "@/model/post/post";

interface IProps {
  item: TPost;
}
export const Carousel = ({ item }: IProps): JSX.Element => {
  const [post, setPost] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });


  return (
    <div className="navigation-wrapper relative">
      <div className="keen-slider w-full" ref={sliderRef}>
        {
          item.media.map((i, idx) => (
            <img
              src={i.mediaUrl}
              alt="content"
              className="keen-slider__slide w-full"
              key={idx}
            />
          ))
        }
        {loaded && instanceRef.current && (
          <div className="dots absolute bottom-0 right-[50%] flex items-center justify-center py-[10px] translate-x-1/2">
            {[
              ...Array(instanceRef?.current?.track?.details?.slides?.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`dot mx-[2px] h-[6px] w-[6px] rounded-full ${
                    currentSlide === idx ? "bg-c2" : "bg-[#B69C95]"
                  }`}
                ></button>
              );
            })}
          </div>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-between">
          {currentSlide === 0 ? (
            ""
          ) : (
            <div className="absolute top-[50%] left-0">
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            </div>
          )}
          {currentSlide ===
          instanceRef?.current?.track?.details?.slides?.length - 1 ? (
            ""
          ) : (
            <div className="absolute top-[50%] right-0">
              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef?.current?.track?.details?.slides?.length - 1
                }
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
