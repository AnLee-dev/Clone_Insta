import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../../hooks/useClickOutSide";
import ArticleDetailMedia from "./ArticleDetailMedia";
import ArticleDetailComment from "./ArticleDetailComment";
import { INewFeed } from "../../../../model/newFeed";

interface IProps {
  item: INewFeed;
  setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  settingRef: React.MutableRefObject<null>;
}
export const ArticleDetail = ({
  item,
  setIsShowDetail,
}: IProps): JSX.Element => {
  const settingRef = useRef(null);
  const [check, setCheck] = useState(false);
  useOnClickOutside(settingRef, () => setIsShowDetail(false));
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000096]">
      <div
        ref={settingRef}
        className="h-[95%] w-[63%] rounded-[4px] bg-c2 flex"
      >
        <ArticleDetailMedia item={item}/>
        <ArticleDetailComment item={item} setCheck={setCheck} check={check} settingRef={settingRef}/>
      </div>
    </div>
  );
};