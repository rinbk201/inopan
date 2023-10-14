import Header from "@/lib/componets/header";
import PostInfoTemplate from "@/lib/componets/templates/PostInfoTemplate";
import { getApprovedCount, getBookmarkCount, getBookmarkPosts, getPostDetail, getRequestCount } from "@/lib/utils/post";
import { PostDetailType, PostType } from "@/types";
import { Box, Button } from "@mui/material";
import Link from "next/link";

// async function fetchAllPosts(): Promise<PostType[]> {
//     const res = await fetch(`http://localhost:3000/api/post`,
//     {
//         //cache: "no-store", //SSR
//         cache: "force-cache",
//     }
//     );
//     const data = await res.json();

//     return data.posts;
// }

export default async function PostDetail({ params }: { params: { id: string } }) {
    const postId: number = parseInt(params.id);
    const post:PostType = await getPostDetail(postId);

    const postData:PostDetailType = {
        PostType: post,
       approvedCount: await getApprovedCount(postId),
       bookmarkCount : await getBookmarkCount(postId),
       requestCount:await getRequestCount(postId)


    }
  return (
    <>
      <Header />
      <PostInfoTemplate postData={postData}/>

    </>
  );
}
