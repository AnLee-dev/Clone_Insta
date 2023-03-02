import clsx from "clsx";

interface IProps {
  nickName: string;
  className?: string;
}
export const NickName = ({ nickName, className }: IProps): JSX.Element => {
  return (
    <span
      className={clsx(
        "items-center text-[14px] cursor-pointer text-[#262626] font-semibold ",
        className
      )}
    >
      {nickName}
    </span>
  );
};
