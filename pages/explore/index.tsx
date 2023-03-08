import {Explore} from "@/components/Organisms/Explore";
import { useAppSelector } from "@/store/hooks";
import { NextPage } from "next";
import {chunk} from 'lodash'

const ExplorePage: NextPage = () => {
  const explore = useAppSelector((state) => chunk(state.explore.data,3))
  
  return (
    <div className="w-[100vw] h-[100vh] mb-[84px] pt-[20px] text-[.85rem]">
        {explore.map((item: any, idx:number) =>(
          <Explore item={item} idx={idx} key={idx}/>
        ))}

    </div>
  );
};
export default ExplorePage;
