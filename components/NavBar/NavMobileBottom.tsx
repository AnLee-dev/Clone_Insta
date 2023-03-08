import Link from "next/link";
import { useAppSelector } from "../../store/hooks";
import * as ICON from "@/assets/svg";
export const NavMobileBottom = () => {
  const sectionSelected = useAppSelector((state) => state.nav.sectionSelected);

  return (
    <div className="fixed bottom-0 w-full h-[49px] bg-c2 md:hidden">
      <div className=" flex justify-around">
        {/*Home page*/}
        <Link href="/">
          <div className="flex group my-[2px] h-[52px] cursor-pointer rounded-[25px] md:flex md:items-center md:justify-center ">
            <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
              <div className="">
                {sectionSelected === "HOME" ? (
                  <ICON.HomeIconMount />
                ) : (
                  <ICON.HomeIconUnmount />
                )}
              </div>
            </div>
          </div>
        </Link>
        {/* Search page */}
        <div className="flex group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center">
          <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
            {sectionSelected === "SEARCH" ? (
              <ICON.SearchIconMount />
            ) : (
              <ICON.SearchIconUnmount />
            )}
          </div>
        </div>
        {/* REELS page */}
        <Link href="/reels/">
          <div className="flex group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center">
            <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
              {sectionSelected === "REELS" ? (
                <ICON.ReelsIconMount />
              ) : (
                <ICON.ReelsIconUnmount />
              )}
            </div>
          </div>
        </Link>
        {/* MESSENGER page */}
        <div className="flex group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center">
          <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
            {sectionSelected === "MESSENGER" ? (
              <ICON.MessegerIconMount />
            ) : (
              <ICON.MessegerIconUnmount />
            )}
          </div>
        </div>
        {/* PROFILE page */}
        <div className="flex group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center">
          <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
            <ICON.HomeIconUnmount />
          </div>
        </div>
      </div>
    </div>
  );
};
