/* eslint-disable react-hooks/rules-of-hooks */
import { APP_API } from "@/apis";
import Content from "@/components/Content/Content";
import { TPost } from "@/model/post/post";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { save } from "@/store/slice/new_feed";
import { InferGetStaticPropsType } from "next";
import React, { useEffect } from "react";

export const getStaticProps = async () => {
  const res = await fetch(APP_API.posts.list, {
    method: "GET",
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDkxMGViMWY3M2VlYzVjNjU3ZWI2ZTMiLCJpYXQiOjE2ODg1NTEyMDYsImV4cCI6MTY4ODU1MzAwNiwidHlwZSI6ImFjY2VzcyJ9.YhtY0Oh2TuAbPza6VmjtB3Sux_S7VRzalNRs_PXJ8VQ`
    }
  });

  const post: TPost[] = await res.json();
  
  return {
    props: {
      _post: post,
    },
  };
};
function Home({
  _post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(save(_post));
  }, [_post, dispatch]);

  const post = useAppSelector((state) => state.newFeed.data);
  
  return (post && <Content post={post} />);
}
export default Home;
