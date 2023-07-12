import Footer from "./Footer";
import { Posts } from "./Posts";
import { Stories } from "../../components/Molecules/Stories/index";
import Suggestions from "./Suggestions";
import { SwitchAccounts } from "./SwitchAccounts";
import { INewFeed } from "@/model/newFeed";
import { TPost } from "@/model/post/post";

interface IProps {
  post: TPost[];
}
function Content({ post }: IProps): JSX.Element {

  return (
    <div className="w-full md:ml-[71px] lg:ml-[71px] xl:ml-[336px] h-screen lg:w-[calc(100vw-71px)] ssm:w-[70%] ssm:m-auto md:w-[100%]">
      <div className="m-auto mt-[48px] h-screen lg:w-[853px] w-full">
        <div className="flex w-full lg:justify-between justify-center">
          <div className="md:w-[470px] w-full h-screen">
            <div className="h-[84px] relative mb-[40px]">
              <Stories />
            </div>
            <div className="h-full">
              <Posts post={post}/>
            </div>
          </div>
          <div className="w-[319px] h-screen mt-[5px] lg:block hidden">
            <SwitchAccounts />
            <Suggestions />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
