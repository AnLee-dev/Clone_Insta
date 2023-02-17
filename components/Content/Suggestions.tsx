import { NickName } from "../../components/Molecules/Article/NickName";
import { useAppSelector } from "../../store/hooks";

export const Suggestions = () => {
  const stories = useAppSelector((state) => state.stories.data.slice(0,5));
  
  return (
    <div className="mt-[20px] w-full">
      <div className="flex h-[19px] w-full justify-between">
        <div className="w-[80%] text-[14px] font-semibold text-c3">
          Gợi ý cho bạn
        </div>
        <div className="flex w-[20%] justify-end text-[12px] font-semibold text-c4">
          <button>Xem tất cả</button>
        </div>
      </div>
      <div className="mt-[10px]">
        {stories.map((i, idx) => (
          <div className="flex h-[48px] justify-between" key={idx}>
            <div className="flex w-[80%]">
              <button>
                <div className="flex h-[42px] w-[42px] items-center rounded-[50%]">
                  <div className="">
                    <img
                      src={i.user.avatar}
                      alt="avt"
                      className="h-[32px] w-[32px] rounded-[50%] "
                    />
                  </div>
                </div>
              </button>
              <div className="ml-[5px] flex w-[50%] flex-col items-start justify-center">
                <NickName nickName={i.user.nick_name} />
                <div className="text-[12px] text-[#8E8E8E]">
                  hehehehehehehhe
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[12px] font-semibold text-c5">
                <button>Theo dõi</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Suggestions;
