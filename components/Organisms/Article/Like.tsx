interface IProps{
  like: number;
}
export const Like = ({like}:IProps):JSX.Element => {
  return (
    <div className="flex">
      <div className="text-[14px] text-c4 font-[600]">{like} lượt thích</div>
    </div>
  )
}
