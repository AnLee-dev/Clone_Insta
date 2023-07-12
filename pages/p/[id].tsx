import { APP_API } from "@/apis";
import Content from "@/components/Content/Content";
import { ArticleDetail } from "@/components/Organisms/Article/detail";
import { INewFeed } from "@/model/newFeed";
import { TPost } from "@/model/post/post";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { save } from "@/store/slice/new_feed";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const getServerSideProps = async () => {
  const res = await fetch(APP_API.article.list);
  const post: TPost[] = await res.json();
  return {
    props: {
      _post: post
    },
  };
};
function Home({
  _post
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  useEffect(() => {
    dispatch(save(_post));
  }, [_post, dispatch]);

  const post = useAppSelector((state) => state.newFeed.data);
  const [isShowDetail, setIsShowDetail] = useState(false);
  return (
    <>
      <Content post={post} />
      <ArticleDetail item={post[0]}setIsShowDetail={setIsShowDetail} />
    </>
  );
}
export default Home;
