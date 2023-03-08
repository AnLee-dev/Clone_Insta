import { useAppSelector } from "@/store/hooks";
import * as ICON from "@/assets/svg";
import clsx from "clsx";

export const NavMobileTop = () => {
  const isReel = useAppSelector(
    (state) => state.nav.sectionSelected === "REELS"
  );
  return (
    <div
      className={clsx(
        "md:hidden w-full h-[44px] flex justify-center fixed items-center z-20 bg-white",
        isReel && "hidden"
      )}
    >
      <div className="m-0 w-[90%] flex justify-center items-center">
        <div className="flex w-full items-center justify-center h-[30px] ">
          <div className="flex justify-between w-full">
            {/**logo insta */}
            <div className="flex cursor-pointer items-center justify-center">
              <div className="">
                <ICON.LogoText />
              </div>
              <div className="ml-[10px]">
                <ICON.BackIcon />
              </div>
            </div>
            {/**Post and Notification*/}
            <div className=" flex w-[15%] items-center justify-between">
              <div className="flex items-center">
                <ICON.CreateIconUnmount />
              </div>
              {/**Notification */}
              <div className="cursor-pointer">
                <div className="">
                  <ICON.HeartIconUnmount />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
