interface IProps{
    nickName: string;
}
export const NickName = ({nickName}:IProps):JSX.Element => {
  return (
    <span className="items-center text-[14px] cursor-pointer text-[#262626] font-semibold">{nickName}</span>
  )
};