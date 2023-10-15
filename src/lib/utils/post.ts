`server-only`
import { PostCardType, PostType } from "@/types"
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


//approvedの人数
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
//bookmarkの人数
export const getBookmarkCount = async(postId:number): Promise<number> => {
	
    const res = await fetch(`http://localhost:3000/api/post/${postId}/user-relation/bookmark`,
    {
        method: 'GET',
		next:{revalidate: 60*30}
    }
    );
    const data = await res.json();
    const approvedCount = data.userRelation.length;
    
    return approvedCount;
}

//requestの人数　応募中のユーザー
export const getRequestCount = async(postId:number): Promise<number> => {
    const res = await fetch(`http://localhost:3000/api/post/${postId}/user-relation/request`,
    {
        method: 'GET',
		next:{revalidate: 60*30}
    }
    );
    const data = await res.json();
    const approvedCount = data.userRelation.length;
    
    return approvedCount;
}


//postCardに渡す状態
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

//自分が作成したpost
export const getAutherPosts = async(user_id:number): Promise<PostType[]> => {
	const res = await fetch(`http://localhost:3000/api/user/${user_id}/post/auther-post`,
    {
        method: 'GET',
		next:{revalidate: 100}
    }
    );
    
    const data = await res.json();
    return data.posts;
}

//参加予定のpost
export const getConfirmedPosts = async(user_id:number): Promise<PostType[]> => {
	const res = await fetch(`http://localhost:3000/api/user/${user_id}/post/confirmed-post`,
    {
        method: 'GET',
		next:{revalidate: 100}
    }
    );
    
    const data = await res.json();
    return data.posts;
}

//承認待ちのpost
export const getApplicationPosts = async(user_id:number): Promise<PostType[]> => {
	const res = await fetch(`http://localhost:3000/api/user/${user_id}/post/application-post`,
    {
        method: 'GET',
		next:{revalidate: 100}
    }
    );
    
    const data = await res.json();
    return data.posts;
}
//承認済みのpost
export const getApprovedPosts = async(user_id:number): Promise<PostType[]> => {
	const res = await fetch(`http://localhost:3000/api/user/${user_id}/post/approved-post`,
    {
        method: 'GET',
		next:{revalidate: 100}
    }
    );
    
    const data = await res.json();
    return data.posts;
}
//bookmarkしたポスト
export const getBookmarkPosts = async(user_id:number): Promise<PostType[]> => {
	const res = await fetch(`http://localhost:3000/api/user/${user_id}/post/bookmarked-post`,
    {
        method: 'GET',
		next:{revalidate: 60*30}
    }
    );
    const data = await res.json();

    return data.posts;
}


//postの詳細を取得
export const getPostDetail = async(post_id:number): Promise<PostType> => {
	const res = await fetch(`http://localhost:3000/api/post/2`,
    {
        method: 'GET',
        // cache:"no-cache"
		next:{revalidate: 10}
    }
    );
    const data = await res.json();
    return data.post;
}