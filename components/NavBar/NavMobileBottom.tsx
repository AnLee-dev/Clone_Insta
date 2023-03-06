import Link from "next/link";
import { useAppSelector } from "../../store/hooks";

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
                  <svg
                    aria-label="Trang chủ"
                    className="duration-300 ease-in-out group-hover:scale-110"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
                  </svg>
                ) : (
                  <svg
                    aria-label="Trang chủ"
                    className="duration-300 ease-in-out group-hover:scale-110"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </Link>
        {/* Search page */}
        <div className="flex group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center">
          <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
            {sectionSelected === "SEARCH" ? (
              <svg
                aria-label="Tìm kiếm"
                className="duration-300 ease-in-out group-hover:scale-110"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M18.5 10.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  x1="16.511"
                  x2="21.643"
                  y1="16.511"
                  y2="21.643"
                ></line>
              </svg>
            ) : (
              <svg
                aria-label="Tìm kiếm"
                className="duration-300 ease-in-out group-hover:scale-110"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"
                ></line>
              </svg>
            )}
          </div>
        </div>
        {/* REELS page */}
        <Link href="/reels/">
          <div className="flex group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center">
            <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
              {sectionSelected === "REELS" ? (
                <svg
                  aria-label="Reels"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="m12.823 1 2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1Zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 0 1 1.596 2.82l.07.295h-4.629L15.15 1Zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 0 1 3.942-4.53Zm9.735 12.834-4.545-2.624a.909.909 0 0 0-1.356.668l-.008.12v5.248a.91.91 0 0 0 1.255.84l.109-.053 4.545-2.624a.909.909 0 0 0 .1-1.507l-.1-.068-4.545-2.624Zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-label="Reels"
                  className="duration-300 ease-in-out group-hover:scale-110"
                  color="#262626"
                  fill="#262626"
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
                    x1="2.049"
                    x2="21.95"
                    y1="7.002"
                    y2="7.002"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="13.504"
                    x2="16.362"
                    y1="2.001"
                    y2="7.002"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="7.207"
                    x2="10.002"
                    y1="2.11"
                    y2="7.002"
                  ></line>
                  <path
                    d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              )}
            </div>
          </div>
        </Link>
        {/* MESSENGER page */}
        <div className="flex group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center">
          <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
            {sectionSelected === "MESSENGER" ? (
              <svg
                aria-label="Messenger"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M12.003 1.131a10.487 10.487 0 0 0-10.87 10.57 10.194 10.194 0 0 0 3.412 7.771l.054 1.78a1.67 1.67 0 0 0 2.342 1.476l1.935-.872a11.767 11.767 0 0 0 3.127.416 10.488 10.488 0 0 0 10.87-10.57 10.487 10.487 0 0 0-10.87-10.57Zm5.786 9.001-2.566 3.983a1.577 1.577 0 0 1-2.278.42l-2.452-1.84a.63.63 0 0 0-.759.002l-2.556 2.049a.659.659 0 0 1-.96-.874L8.783 9.89a1.576 1.576 0 0 1 2.277-.42l2.453 1.84a.63.63 0 0 0 .758-.003l2.556-2.05a.659.659 0 0 1 .961.874Z"></path>
              </svg>
            ) : (
              <svg
                aria-label="Messenger"
                className="duration-300 ease-in-out group-hover:scale-110"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="1.739"
                ></path>
                <path
                  d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            )}
          </div>
        </div>
        {/* PROFILE page */}
        <div className="flex group my-[2px] h-[52px] cursor-pointer rounded-[25px] hover:bg-c1 md:flex md:items-center md:justify-center">
          <div className="m-auto flex lg:w-5/6 lg:items-center lg:justify-center xl:items-start xl:justify-start">
            <svg
              aria-label="Trang chủ"
              className="duration-300 ease-in-out group-hover:scale-110"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
