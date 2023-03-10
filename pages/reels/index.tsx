import { APP_API } from "@/apis";
import { Reel } from "@/components/Organisms/Reels/index";
import { TReels } from "@/model/reels";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const res = await fetch(APP_API.reels.list);
  const reels: TReels[] = await res.json();

  return {
    props: {
      reels,
    },
  };
};
function ReelPage({ reels }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Reel reels={reels} />;
}

export default ReelPage;
