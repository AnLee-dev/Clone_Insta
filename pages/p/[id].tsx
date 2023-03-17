import { APP_API } from "@/apis";
import Content from "@/components/Content/Content";
import { ArticleDetail } from "@/components/Organisms/Article/detail";
import { INewFeed } from "@/model/newFeed";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { save } from "@/store/slice/new_feed";
import { InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";

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
  const [isShowDetail, setIsShowDetail] = useState(false);
  return (
    <>
      <Content article={article} />
      <ArticleDetail item={article[0]}setIsShowDetail={setIsShowDetail} />
    </>
  );
}
export default Home;
