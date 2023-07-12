import { TPost } from "@/model/post/post";
import { Article } from "../../components/Organisms/Article";
import { INewFeed } from "@/model/newFeed";

interface IProp {
  post: TPost[];
}
export const Posts = ({ post }: IProp): JSX.Element => {
  return (
    <div>
      <Article post={post} />
    </div>
  );
};
