"use client";
import { useAppSelector } from "../../../store/hooks";
import { Story } from "./Story";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { Arrow } from "../Arrow";

export const Stories = (): JSX.Element => {
  const stories = useAppSelector((state) => state.stories.data);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      spacing: 0,
      perView: 6.5,
    },
    dragSpeed: 1.2,
    renderMode: "precision",
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 6,
        },
      },
      "(min-width: 600px) and (max-width: 720px)": {
        slides: {
          perView: 5.5,
        },
      },
      "(min-width: 490px) and (max-width: 599px)": {
        slides: {
          perView: 4.5,
        },
      },
      "(min-width: 433px) and (max-width: 489px)": {
        slides: {
          perView: 4.5,
        },
      },
      "(min-width: 385px) and (max-width: 432px)": {
        slides: {
          perView: 4.5,
        },
      },
      "(min-width: 310px) and (max-width: 384px)": {
        slides: {
          perView: 4,
        },
      },
      "(min-width: 270px) and (max-width: 309px)": {
        slides: {
          perView: 3,
        },
      },
      "(min-width: 0px) and (max-width: 269px)": {
        slides: {
          perView: 2.5,
        },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className=" flex h-full w-full md:w-[470px]">
      <div className="flex h-full w-full">
        <ul
          ref={sliderRef}
          className=" keen-slider flex h-full w-full justify-between"
        >
          {stories.map((i, index) => (
            <li
              className="keen-slider__slide h-[84px]  w-[66px] select-none text-center"
              key={index}
            >
              <Story
                key={index}
                src={i.user.avatar}
                nickName={i.user.nick_name}
              />
            </li>
          ))}
        </ul>
        {loaded && instanceRef.current && (
          <div className="flex justify-between">
            {currentSlide === 0 ? (
              ""
            ) : (
              <div className="absolute top-[30%] left-[15px]">
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                />
              </div>
            )}
            {currentSlide ===
            instanceRef.current.track.details.slides.length - 1 ?  (
              ""
            ) : (
              <div className="absolute top-[30%] right-[15px]">
                <Arrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
