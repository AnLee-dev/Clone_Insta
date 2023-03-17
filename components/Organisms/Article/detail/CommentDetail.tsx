import { Fragment, useRef, useState } from "react";
import { AccountAvt } from "../../../Molecules/Article/AccountAvt";
import { PostTime } from "../../../Molecules/Article/PostTime";
import { Caption } from "../Caption";
import { useOnClickOutside } from "../../../../hooks/useClickOutSide";
import { INewFeed } from "../../../../model/newFeed";
interface IProps {
  item: INewFeed;
}
export const CommentDetail = ({ item }: IProps): JSX.Element => {
  const settingRef = useRef(null);
  const [isShowOptionsDetailComment, setIsShowOptionsDetailComment] =
    useState(false);
  const [check, setCheck] = useState(true);
  const toggle = () => {
    setIsShowOptionsDetailComment((prev) => !prev);
  };
  useOnClickOutside(settingRef, () => setIsShowOptionsDetailComment(false));
  return (
    <Fragment>
      {item?.comments.map((item, idx) => (
        <div className="mb-[16px] flex w-full items-center justify-center" key={idx}>
          <div className="group flex w-full justify-between">
            <div className=" flex w-full">
              <div className="ssm:w-[15%] sm:w-[10%]">
                <AccountAvt src={item.user.profile_pic_url} />
              </div>
              <div className="ml-[10px] w-[80%] items-center">
                <div className="w-full">
                  <Caption nickName={item.user.username} caption={item.text} />
                </div>
                <div className="flex gap-[10px]">
                  <PostTime time={item.created_at} className="!text-[12px]" />
                  <div>
                    <div className="text-[12px] font-semibold text-c3">
                      {item.comment_like_count}
                      <span className=""> lượt thích</span>
                    </div>
                  </div>
                  <div className="text-[12px] font-semibold text-c3">
                    Trả lời
                  </div>
                  <div>
                    <div
                      className="flex w-full justify-start opacity-0 group-hover:opacity-100"
                      onClick={toggle}
                    >
                      <svg
                        aria-label="Tùy chọn khác"
                        className="cursor-pointer fill-c3"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                      </svg>
                    </div>
                    {isShowOptionsDetailComment && (
                      <div className="fixed inset-0 flex items-center justify-center bg-[#00000096]">
                        <div
                          ref={settingRef}
                          className="absolute h-[144px] w-[400px] rounded-[12px] bg-c2"
                        >
                          <ul className="divide-y divide-c8 [&>li]:flex [&>li]:h-[48px] [&>li]:cursor-pointer [&>li]:items-center [&>li]:justify-center [&>li]:px-[8px] [&>li]:py-[4px] [&>li]:text-[14px]">
                            <li className="font-bold text-c6">Báo cáo</li>
                            <li className="font-bold text-c6">Xóa</li>
                            <li
                              className=""
                              onClick={() =>
                                setIsShowOptionsDetailComment((pre) => !pre)
                              }
                            >
                              Hủy
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {check ? (
              <div className="flex items-center justify-center" onClick={() => setCheck((prev) => !prev)}>
                <svg
                  aria-label="Bỏ thích"
                  className="_ab6-"
                  color="#ed4956"
                  fill="#ed4956"
                  height="12"
                  role="img"
                  viewBox="0 0 48 48"
                  width="12"
                >
                  <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              </div>
            ) : (
              <div className="flex items-center justify-center" onClick={() => setCheck((prev) => !prev)}>
                <svg
                  aria-label="Thích"
                  className="_ab6-"
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      ))}
    </Fragment>
  );
};
