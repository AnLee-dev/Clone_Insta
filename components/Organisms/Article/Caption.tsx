import { NickName } from "../../Molecules/Article/NickName";
interface IProps {
  nickName: string;
  caption: string;
}
export const Caption = ({ nickName, caption }: IProps): JSX.Element => {
  return (
    <div className="w-full">
      <div className="">
        <NickName nickName={nickName} />{" "}
        <span className="text-[14px] whitespace-pre-line">{caption}</span>
      </div>
    </div>
  );
};
