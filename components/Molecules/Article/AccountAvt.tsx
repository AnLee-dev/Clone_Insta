/* eslint-disable @next/next/no-img-element */
interface IProps{
    src: string;
}
export const AccountAvt = ({src}:IProps):JSX.Element=> {
  return (
    <button>
      <div className="rounded-[50%] w-[42px] h-[42px] bg-gradient-to-tr from-[#FFC500] to-[#D300C5] p-[3px]">
        <div className="flex items-center justify-center rounded-[50%] bg-white p-[2px] ">
          <img
            src={src}
            alt="avt"
            className="h-[32px] w-[32px] rounded-[50%] "
          />
        </div>
      </div>
    </button>
  )
};
