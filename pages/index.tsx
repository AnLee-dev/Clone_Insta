import { APP_API } from "@/apis";
import Content from "@/components/Content/Content";
import { INewFeed } from "@/model/newFeed";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { save } from "@/store/slice/new_feed";
import { InferGetServerSidePropsType } from "next";
import React, { useEffect } from "react";

export const getServerSideProps = async () => {
  const res = await fetch(APP_API.article.list);
  const article: INewFeed[] = await res.json();

  return {
    props: {
      _article: article,
    },
  };
};
function Home({
  _article,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useAppDispatch();
  console.log(_article);

  useEffect(() => {
    dispatch(save(_article));
  }, [_article, dispatch]);

  const article = useAppSelector((state) => state.newFeed.data);

  return (
    <Content article={article} />
  );
}
export default Home;
