import { APP_API } from "@/apis";
import { Explore } from "@/components/Organisms/Explore";
import { getAuthorizationToken } from "@/mocks/mockmocksAuthorization";
import { TExplore } from "@/model/explore";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { save } from "@/store/slice/explore";
import { chunk } from "lodash";
import { InferGetStaticPropsType } from "next";
import { useEffect } from "react";

export const getStaticProps = async () => {
  const token = getAuthorizationToken;
  const res = await fetch(APP_API.explore.list
    , {
      method: "GET",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  const explore: TExplore[] = await res.json();

  return {
    props: {
      _explore: explore,
    },
  };
};

function ExplorePage({
  _explore,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(save(_explore));
  }, [_explore, dispatch]);

  const explore = useAppSelector((state) => chunk(state.explore.data, 3));

  return (
    <div className="w-[100vw] h-[100vh] mb-[84px] pt-[20px] text-[.85rem]">
      {explore.map((item: TExplore[], idx: number) => (
        <Explore item={item} idx={idx} key={idx} />
      ))}
    </div>
  );
}
export default ExplorePage;
