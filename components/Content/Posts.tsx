import { Article } from "../../components/Organisms/Article";
import { INewFeed } from "@/model/newFeed";

interface IProp {
  article: INewFeed[];
}
export const Posts = ({ article }: IProp): JSX.Element => {
  return (
    <div>
      <Article article={article} />
    </div>
  );
};
