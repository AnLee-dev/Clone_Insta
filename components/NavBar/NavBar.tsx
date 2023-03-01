"use client";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { TSection, setSectionSelect } from "../../store/slice/nav";
import { useOnClickOutside } from "../../hooks/useClickOutSide";
import HomeIconMount from "@/assets/svg/Home_Icon_Mount.svg";
import HomeIconUnmount from "@/assets/svg/Home_Icon_Unmount.svg";
import LogoText from "@/assets/svg/Logo_Text.svg";
import LogoIcon from "@/assets/svg/Logo_Icon.svg";
import SearchIconMount from "@/assets/svg/Search_Icon_Mount.svg";
import SearchIconUnmount from "@/assets/svg/Search_Icon_Unmount.svg";
import ExploreIconMount from "@/assets/svg/Explore_Icon_Mount.svg";
import ExploreIconUnmount from "@/assets/svg/Explore_Icon_Unmount.svg";
import ReelsIconMount from "@/assets/svg/Reels_Icon_Mount.svg";
import ReelsIconUnmount from "@/assets/svg/Reels_Icon_Unmount.svg";
import MessegerIconMount from "@/assets/svg/Messeger_Icon_Mount.svg";
import MessegerIconUnmount from "@/assets/svg/Messeger_Icon_Unmount.svg";
import NotificationIconMount from "@/assets/svg/Notification_Icon_Mount.svg";
import NotificationIconUnmount from "@/assets/svg/Notification_Icon_Unmount.svg";
import CreateIconMount from "@/assets/svg/Create_Icon_Mount.svg";
import CreateIconUnmount from "@/assets/svg/Create_Icon_Unmount.svg";
import MoreIconMount from "@/assets/svg/More_Icon_Mount.svg";
import MoreIconUnmount from "@/assets/svg/More_Icon_Unmount.svg";
import SettingIcon from "@/assets/svg/Setting_Icon.svg";
import SaveIcon from "@/assets/svg/Save_Icon.svg";
import ChangeModeIcon from "@/assets/svg/Change_Mode_Icon.svg";
import ActivityIcon from "@/assets/svg/Activity_Icon.svg";
import ReportIcon from "@/assets/svg/Report_Icon.svg";
import Link from "next/link";

function NavBar() {
  const sectionSelected = useAppSelector((state) => state.nav.sectionSelected);

  const dispatch = useAppDispatch();
  const settingRef = useRef(null);

  const setSelect = (section: TSection) => {
    // Router.push('/reels')
    dispatch(setSectionSelect(section));
  };
  const [check, setCheck] = useState(false);
  const toggle = () => setCheck((prev) => !prev);

  useOnClickOutside(settingRef, () => setCheck(false));

  return (
    <div className="hidden h-screen border-r-[1px] border-c1 md:fixed md:block md:w-[72px] lg:w-[72px] xl:w-[250px] 2xl:w-[336px] ">
      <div className="h-screen  pt-[8px]">
        {/* logo Insta */}
        <div className="flex h-[92px] cursor-pointer items-center justify-start px-[20px]">
          <div className="hidden xl:block">
            <LogoText />
          </div>
          <div className="hidden md:block lg:block xl:hidden">
            <LogoIcon />
          </div>
        </div>
        <div className="h-[82%]">
          <div className="">
            {/* Home page */}
            <div
              className="group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center "
              onClick={() => setSelect("HOME")}
            >
              <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
                <div className="">
                  <span className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                    {sectionSelected === "HOME" ? (
                      <HomeIconMount />
                    ) : (
                      <HomeIconUnmount />
                    )}
                  </span>
                </div>
                {sectionSelected === "HOME" ? (
                  <div className="hidden lg:hidden xl:block pl-[16px] font-bold">
                    Trang chủ
                  </div>
                ) : (
                  <div className="hidden lg:hidden xl:block pl-[16px]">
                    Trang chủ
                  </div>
                )}
              </div>
            </div>
            {/* Search page */}
            <div
              className="group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center"
              onClick={() => setSelect("SEARCH")}
            >
              <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
                <span className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                  {sectionSelected === "SEARCH" ? (
                    <SearchIconMount />
                  ) : (
                    <SearchIconUnmount />
                  )}
                </span>
                {sectionSelected === "SEARCH" ? (
                  <div className="hidden lg:hidden xl:block pl-[16px] font-bold">
                    Tìm kiếm
                  </div>
                ) : (
                  <div className="hidden lg:hidden xl:block pl-[16px]">
                    Tìm kiếm
                  </div>
                )}
              </div>
            </div>
            {/* EXPLORE page */}
            <div
              className="group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center"
              onClick={() => setSelect("EXPLORE")}
            >
              <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
                <span className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                  {sectionSelected === "EXPLORE" ? (
                    <ExploreIconMount />
                  ) : (
                    <ExploreIconUnmount />
                  )}
                </span>
                {sectionSelected === "EXPLORE" ? (
                  <div className="hidden lg:hidden xl:block pl-[16px] font-bold">
                    Khám phá
                  </div>
                ) : (
                  <div className="hidden lg:hidden xl:block pl-[16px]">
                    Khám phá
                  </div>
                )}
              </div>
            </div>
            {/* REELS page */}
            <Link href="reels/" passHref>
            <div
              className="group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center"
              onClick={() => setSelect("REELS")}
            >
              <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
                <span className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                  {sectionSelected === "REELS" ? (
                    <ReelsIconMount />
                  ) : (
                    <ReelsIconUnmount />
                  )}
                </span>
                {sectionSelected === "REELS" ? (
                  <div className="hidden lg:hidden xl:block pl-[16px] font-bold">
                    Reels
                  </div>
                ) : (
                  <div className="hidden lg:hidden xl:block pl-[16px]">
                    Reels
                  </div>
                )}
              </div>
            </div>
            </Link>
            {/* MESSENGER page */}
            <div
              className="group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center"
              onClick={() => setSelect("MESSENGER")}
            >
              <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
                <span className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                  {sectionSelected === "MESSENGER" ? (
                    <MessegerIconMount />
                  ) : (
                    <MessegerIconUnmount />
                  )}
                </span>
                {sectionSelected === "MESSENGER" ? (
                  <div className="hidden lg:hidden xl:block pl-[16px] font-bold">
                    Tin nhắn
                  </div>
                ) : (
                  <div className="hidden lg:hidden xl:block pl-[16px]">
                    Tin nhắn
                  </div>
                )}
              </div>
            </div>
            {/* NOTIFICATION page */}
            <div
              className="group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center"
              onClick={() => setSelect("NOTIFICATION")}
            >
              <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
                <span className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                  {sectionSelected === "NOTIFICATION" ? (
                    <NotificationIconMount />
                  ) : (
                    <NotificationIconUnmount />
                  )}
                </span>
                {sectionSelected === "NOTIFICATION" ? (
                  <div className="hidden lg:hidden xl:block pl-[16px] font-bold">
                    Thông báo
                  </div>
                ) : (
                  <div className="hidden lg:hidden xl:block pl-[16px]">
                    Thông báo
                  </div>
                )}
              </div>
            </div>
            {/* CREATE page */}
            <div
              className="group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center"
              onClick={() => setSelect("CREATE")}
            >
              <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
                <span className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                  {sectionSelected === "CREATE" ? (
                    <CreateIconMount />
                  ) : (
                    <CreateIconUnmount />
                  )}
                </span>
                {sectionSelected === "CREATE" ? (
                  <div className="hidden lg:hidden xl:block pl-[16px] font-bold">
                    Tạo
                  </div>
                ) : (
                  <div className="hidden lg:hidden xl:block pl-[16px]">Tạo</div>
                )}
              </div>
            </div>
            {/* PROFILE page */}
            <div className="group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center">
              <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
                <p className="hidden pl-[16px] lg:hidden xl:block">
                  Trang cá nhân
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative my-[2px] h-[52px] rounded-[25px]">
            <div
              className="group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center"
              onClick={() => {
                toggle(), setSelect("MORE");
              }}
            >
              <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
              <span className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                {sectionSelected === "MORE" ? (
                  <MoreIconMount />
                ) : (
                  <MoreIconUnmount />
                )}
</span>
                {sectionSelected === "MORE" ? (
                  <div className="hidden lg:hidden xl:block pl-[16px] font-bold">
                    Xem thêm
                  </div>
                ) : (
                  <div className="hidden lg:hidden xl:block pl-[16px]">
                    Xem thêm
                  </div>
                )}
              </div>
            </div>
            {check && (
              <div
                ref={settingRef}
                className="absolute bottom-[65px] left-0 h-[308px] w-[238px] rounded-[6px] bg-c2 drop-shadow-xl hover:cursor-pointer"
              >
                <table className="w-full">
                  <tbody className="divide-y divide-c1">
                    <tr className="group h-[44px] w-full cursor-pointer hover:bg-c1">
                      <td className="pl-[10px]">Cài đặt</td>
                      <td  className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110"><SettingIcon /></td>
                    </tr>
                    <tr className="group h-[44px] w-full cursor-pointer hover:bg-c1">
                      <td className="pl-[10px]">Đã lưu</td>
                      <td className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                        <SaveIcon />
                      </td>
                    </tr>
                    <tr className="group h-[44px] w-full cursor-pointer hover:bg-c1">
                      <td className="pl-[10px]">Chuyển chế độ</td>
                      <td className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                        <ChangeModeIcon />
                      </td>
                    </tr>
                    <tr className="group h-[44px] w-full cursor-pointer hover:bg-c1">
                      <td className="pl-[10px]">Hoạt động của bạn</td>
                      <td className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                        <ActivityIcon />
                      </td>
                    </tr>
                    <tr className="group h-[44px] w-full cursor-pointer hover:bg-c1">
                      <td className="pl-[10px]">Báo cáo sự cố</td>
                      <td className="group-hover:[&>svg]:duration-300 group-hover:[&>svg]:ease-in-out group-hover:[&>svg]:scale-110">
                        <ReportIcon />
                      </td>
                    </tr>
                    <tr className="group h-[44px] w-full cursor-pointer hover:bg-c1">
                      <td className="pl-[10px]">Chuyển tài khoản</td>
                      <td></td>
                    </tr>
                    <tr className="group h-[44px] w-full cursor-pointer hover:bg-c1">
                      <td className="pl-[10px]">Đăng xuất</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
