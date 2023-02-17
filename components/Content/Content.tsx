import Footer from "./Footer";
import {Posts} from "./Posts";
import {Stories} from "../../components/Molecules/Stories/index";
import Suggestions from "./Suggestions";
import {SwitchAccounts} from "./SwitchAccounts";

function Content(){
    return (
        <div className="flex w-full lg:justify-between justify-center">
            <div className="md:w-[470px] w-full h-screen">
                <div className="h-[84px] relative mb-[40px]">
                    <Stories/>
                </div>
                <div className="h-full">
                    <Posts />
                </div>
            </div>
            <div className="w-[319px] h-screen mt-[5px] lg:block hidden">
                <SwitchAccounts />
                <Suggestions />
                <Footer />
            </div>
        </div>
    );
}
export default Content;