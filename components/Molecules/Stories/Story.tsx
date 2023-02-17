interface IProps {
  src: string;
  nickName: string;
}

export const Story = ({ src, nickName }: IProps): JSX.Element => {
  return (
    <button>
      <div className="rounded-[50%] w-[66px] h-[66px] bg-gradient-to-tr from-[#FFC500] to-[#D300C5] p-[3px]">
        <div className="flex items-center justify-center rounded-[50%] bg-white p-[2px] ">
          <img
            src={src}
            alt="avt"
            className="h-[56px] w-[56px] rounded-[50%] "
          />
        </div>
      </div>

      <div className="max-w-[74px] truncate pl-[2px] pr-[2px] text-[12px]">
        {nickName}
      </div>
    </button>
  );
};
