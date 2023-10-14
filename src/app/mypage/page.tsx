import Header from "@/lib/componets/header";
import PostCard from "@/lib/componets/organisms/PostCard";
import {
  getApplicationPosts,
  getApprovedPosts,
  getAutherPosts,
  getBookmarkPosts,
  getConfirmedPosts,
  getPostCardInfo,
} from "@/lib/utils/post";
import { PostCardType, PostType } from "@/types";
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

export default async function Home() {
  //投稿した
  const autherPosts: PostType[] = await getAutherPosts(1);
  const autherPostCards: PostCardType[]|undefined= await getPostCardInfo(autherPosts);
  //参加予定
  const confirmedPosts: PostType[] = await getConfirmedPosts(1);
  const confirmedPostCards: PostCardType[]|undefined= await getPostCardInfo(confirmedPosts);
  //承認待ち
  const applicationPosts: PostType[] = await getApplicationPosts(1);
  const applicationPostCards: PostCardType[]|undefined= await getPostCardInfo(applicationPosts);
  //承認済み
  const approvedPosts: PostType[] = await getApprovedPosts(1);
  const approvedPostCards: PostCardType[]|undefined= await getPostCardInfo(approvedPosts);
  //Bookmark
  const bookmarkPosts: PostType[] = await getBookmarkPosts(1);
  const bookmarkPostCards: PostCardType[]|undefined= await getPostCardInfo(bookmarkPosts);

  return (
    <>
      <Header />
      <div>
        <p>メンバー募集中POST</p>
      </div>
      <Box
        display="flex"
        overflow-x="auto"
        justifyContent="flex-start"
        p={2} // これはオプションで、パディングを追加してスクロールバーを適切に配置します
      >
        {autherPostCards!.map((postCard) => (
          <Box key={postCard.PostType.id} flexShrink={0} mx={1} minWidth={300}>
            <PostCard key={postCard.PostType.id} postCardData={postCard} />
            <Button variant="contained">Contained</Button>
          </Box>
        ))}
      </Box>
      <div>
        <p>参加予定</p>
      </div>
      <Box
        display="flex"
        overflow-x="auto"
        justifyContent="flex-start"
        p={2} // これはオプションで、パディングを追加してスクロールバーを適切に配置します
      >
        {confirmedPostCards!.map((postCard) => (
          <Box key={postCard.PostType.id} flexShrink={0} mx={1} minWidth={300}>
            <PostCard key={postCard.PostType.id} postCardData={postCard} />
          </Box>
        ))}
      </Box>
      <div>
        <p>承認待ち</p>
      </div>
      <Box
        display="flex"
        overflow-x="auto"
        justifyContent="flex-start"
        p={2} // これはオプションで、パディングを追加してスクロールバーを適切に配置します
      >
        {applicationPostCards!.map((postCard) => (
          <Box key={postCard.PostType.id} flexShrink={0} mx={1} minWidth={300}>
            <PostCard key={postCard.PostType.id} postCardData={postCard} />
          </Box>
        ))}
      </Box>
      <div>
        <p>承認済み</p>
      </div>
      <Box
        display="flex"
        overflow-x="auto"
        justifyContent="flex-start"
        p={2} // これはオプションで、パディングを追加してスクロールバーを適切に配置します
      >
        {approvedPostCards!.map((postCard) => (
          <Box key={postCard.PostType.id} flexShrink={0} mx={1} minWidth={300}>
            <PostCard key={postCard.PostType.id} postCardData={postCard} />
          </Box>
        ))}
      </Box>
      <div>
        <p>ブックマーク</p>
      </div>
      <Box
        display="flex"
        overflow-x="auto"
        justifyContent="flex-start"
        p={2} // これはオプションで、パディングを追加してスクロールバーを適切に配置します
      >
        {bookmarkPostCards!.map((postCard) => (
          <Box key={postCard.PostType.id} flexShrink={0} mx={1} minWidth={300}>
            <PostCard key={postCard.PostType.id} postCardData={postCard} />
          </Box>
        ))}
      </Box>
    </>
  );
}
