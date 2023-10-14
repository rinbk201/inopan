`server-only`
import { PostType } from "@/types"



export const getAllPostsForMypage = async(): Promise<PostType[]> => {
	const res = await fetch(`http://localhost:3000/api/post`,
    {
        method: 'GET',
		next:{revalidate: 60*30}
    }
    );
    const data = await res.json();


    return data.posts;
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
