import Header from "@/lib/componets/header";
import PostCard from "@/lib/componets/organisms/PostCard";
import {
  getAllPosts,
  getAutherPosts,
  getPostCardInfo,
} from "@/lib/utils/post";
import { PostCardType, PostType } from "@/types";
import { Box } from "@mui/material";
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
  const posts: PostType[] = await getAllPosts();
  const postCards: PostCardType[]|undefined= await getPostCardInfo(posts);
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
        {postCards!.map((postCard) => (
          <Box key={postCard.PostType.id} flexShrink={0} mx={1} minWidth={300}>
            <PostCard key={postCard.PostType.id} postCardData={postCard} />
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
        {postCards!.map((postCard) => (
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
        {postCards!.map((postCard) => (
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
        {postCards!.map((postCard) => (
          <Box key={postCard.PostType.id} flexShrink={0} mx={1} minWidth={300}>
            <PostCard key={postCard.PostType.id} postCardData={postCard} />
          </Box>
        ))}
      </Box>
    </>
  );
}
