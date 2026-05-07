import { APP_API } from "@/apis";
import Content from "@/components/Content/Content";
import { TPost } from "@/model/post/post";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { save } from "@/store/slice/posts";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import React, { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {

  const token = context.req.cookies?.token;

  if(!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const res = await fetch(APP_API.posts.list
  , {
    method: "GET",
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });

  if (res.status === 401) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      }
    }
  }
  const post: TPost[] = await res.json();

  return {
    props: {
      _post: post,
    },
  };
};
function HomePage({
  _post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(save(_post));
  }, [_post, dispatch]);

  const post = useAppSelector((state) => state.newFeed.data);
  return post ? <Content post={post}/> :  null;
}
export default HomePage;
