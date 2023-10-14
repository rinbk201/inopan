`server-only`
import { PostCardType, PostType } from "@/types"
import PostCard from "../componets/organisms/PostCard";
import { UserInfo } from "@prisma/client";
import { getUserInfo } from "./user";



export const getAllPosts = async(): Promise<PostType[]> => {
	const res = await fetch(`http://localhost:3000/api/post`,
    {
        method: 'GET',
		next:{revalidate: 10}
    }
    );
    
    const data = await res.json();
    return data.posts;
}

export const getAutherPosts = async(user_id:number): Promise<PostType[]> => {
	const res = await fetch(`http://localhost:3000/api/user/${user_id}/auther-post`,
    {
        method: 'GET',
		next:{revalidate: 100}
    }
    );
    
    const data = await res.json();
    return data.posts;
}

//
export const getApprovedCount = async(postId:number): Promise<number> => {
	
    const res = await fetch(`http://localhost:3000/api/post/${postId}/user-relation/approved`,
    {
        method: 'GET',
		next:{revalidate: 60*30}
    }
    );
    const data = await res.json();
    const approvedCount = data.userRelation.length;
    
    return approvedCount;
}

export const getPostCardInfo= async(posts:PostType[]): Promise<PostCardType[]|undefined> => {
	const postCardInfos: PostCardType[] = [];
    for (const post of posts) {
        const approvedCount = await getApprovedCount(post.id);
        const userName = (await getUserInfo(post.userInfoId)).displayName;
        postCardInfos.push({
            PostType: post,
            approvedCount: approvedCount,
            autherName: userName
        });
}
return postCardInfos;
}




export const getBookmarkPostsForMypage = async(user_id:number): Promise<PostType[]> => {
	const res = await fetch(`http://localhost:3000/api/user/${user_id}/post/bookmarked-post`,
    {
        method: 'GET',
		next:{revalidate: 60*30}
    }
    );
    const data = await res.json();

    return data.posts;
}




