import { APP_API } from "@/apis";
import Content from "@/components/Content/Content";
import { ArticleDetail } from "@/components/Organisms/Article/detail";
import { useOnClickOutside } from "@/hooks/useClickOutSide";
import { TPost } from "@/model/post/post";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { save } from "@/store/slice/posts";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";

export const getServerSideProps = async () => {
  const res = await fetch(APP_API.posts.list);
  const post: TPost[] = await res.json();
  if(Array.isArray(post)){
    return {
      props: {
        _post: post
      },
    };
  }

};
function Home({
  _post
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isShowEmoji, setIsShowEmoji] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(true);
  const settingRef = useRef(null);

  const a = useCallback(() => {
    setIsShowEmoji(false)
    if(router.query){
      router.push('/')
    }
  }, [router])
  useOnClickOutside(settingRef, a);
  useEffect(() => {
    dispatch(save(_post));
  }, [_post, dispatch]);

  const post = useAppSelector((state) => state.newFeed.data);
  return (
    <>
    {
      post.length &&
      <Content post={post} />
    }
      <ArticleDetail item={post[0]} setIsShowDetail={setIsShowDetail} />
    </>
  );
}
export default Home;
