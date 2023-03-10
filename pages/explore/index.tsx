import { Explore } from "@/components/Organisms/Explore";
import { InferGetStaticPropsType } from "next";
import { APP_API } from "@/apis";
import { TExplore } from "@/model/explore";

export const getStaticProps = async () => {
  const res = await fetch(APP_API.explore.list);
  const explore: TExplore[] = await res.json();

  return {
    props: {
      explore,
    },
  };
};
function ExplorePage({
  explore,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (
    <div className="w-[100vw] h-[100vh] mb-[84px] pt-[20px] text-[.85rem]">
      {explore.map((item: any, idx: number) => (
        <Explore item={item} idx={idx} key={idx} />
      ))}
    </div>
  );
}
export default ExplorePage;
