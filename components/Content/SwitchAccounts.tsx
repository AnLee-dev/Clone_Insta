import { NickName } from "../../components/Molecules/Article/NickName";
import { useAppSelector } from "../../store/hooks";

export interface IProps {}
export const SwitchAccounts = () => {
  const accountUser = useAppSelector((state) => state.accountUser.data);
  return (
    <div className="h-[56px] w-full">
      <div className="flex w-full justify-between">
        {accountUser.map((i, idx) => (
          <div className="flex w-full justify-between" key={idx}>
            <div className="w-full flex">
              <div className="w-[20%]">
                <button>
                  <div className="h-[66px] w-[66px] rounded-[50%] flex justify-start items-center">
                    <div className="flex rounded-[50%] ">
                      <img
                        src={i.avt}
                        alt="avt"
                        className="h-[56px] w-[56px] rounded-[50%] "
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div className="ml-[10px] w-[50%] flex justify-center flex-col items-start pl-[15px]">
                <NickName nickName={i.acc_Name} />
                <div className="text-[14px] text-[#8E8E8E]">{i.sub_Name}</div>
              </div>
            </div>
            <div className="text-[12px] font-semibold text-c5 flex">
              <button>Chuyển</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
