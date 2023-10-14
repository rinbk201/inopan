// データベースに接続するためのクライアントをインポート
import Header from "@/lib/componets/header";
import PostCard from "@/lib/componets/organisms/PostCard";
import { PostType } from "@/types";
import { Box } from "@mui/material";
import Link from "next/link";

async function fetchAllPosts(): Promise<PostType[]> {
    const res = await fetch(`http://localhost:3000/api/post`,
    {
        cache: "no-store", //SSR
    }
    );
    const data = await res.json();

    return data.posts;
}

export default async function Home() {

    const posts:PostType[] = await fetchAllPosts();

  return (
    <>
      <Header />
      <div>
        <p>メンバー募集中POST</p>
      </div>
      <Box 
      display="flex" 
      overflow-x= "auto"
      justifyContent="flex-start" 
      p={2} // これはオプションで、パディングを追加してスクロールバーを適切に配置します
    >
      { posts.map((post)=>(
        <Box key={post.id} flexShrink={0} mx={1} minWidth={300}>
          <PostCard  key={post.id} postData={post}/>
        </Box>
      ))}
      </Box>
      
      
      
          
  
    </>
  );
}
