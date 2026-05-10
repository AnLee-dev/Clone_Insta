import { TPost } from "../../model/post";
import { Article } from "../../components/Organisms/Article";

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
