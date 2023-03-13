import { APP_API } from "@/apis";
import { Reel } from "@/components/Organisms/Reels/index";
import { TReels } from "@/model/reels";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { save } from "@/store/slice/reels";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { useEffect } from "react";

export const getStaticProps = async () => {
  const res = await fetch(APP_API.reels.list);
  const reels: TReels[] = await res.json();

  return {
    props: {
      _reels: reels,
    },
    revalidate: 600,
  };
};
function ReelPage({
  _reels,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(save(_reels));
  }, [_reels, dispatch]);
  
  const reels = useAppSelector((state) => state.reels.data);
  console.log('reels', reels);
  
  return <Reel reels={reels} />;
}

export default ReelPage;
