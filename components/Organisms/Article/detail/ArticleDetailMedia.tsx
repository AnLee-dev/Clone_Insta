/* eslint-disable @next/next/no-img-element */
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { Arrow } from "../../../Molecules/Arrow";
import { INewFeed } from "../../../../model/newFeed";

interface IProps {
  item: INewFeed;
}
export const ArticleDetailMedia = ({ item }: IProps): JSX.Element => {
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
    <div className="navigation-wrapper relative flex h-[100%] w-[55%] items-center justify-center bg-c3">
      <div className="keen-slider flex" ref={sliderRef}>
        <div className="flex items-center justify-center">
          {item.carousel_media.images.map((i, idx) => {
            return (
              <img
                src={i.src}
                alt="content"
                className="keen-slider__slide w-full h-full"
                key={idx}
              />
            )
          })}
          {loaded && instanceRef.current && (
            <div className="dots absolute bottom-0 left-[50%] flex items-center justify-center py-[10px]">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
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
            instanceRef.current.track.details.slides.length - 1 ? (
              ""
            ) : (
              <div className="absolute top-[50%] right-0">
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

export default ArticleDetailMedia;
