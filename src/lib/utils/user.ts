import { UserInfoType } from "@/types"

`server-only`

export const getUserInfo = async(userId:number): Promise<UserInfoType> => {
	const res = await fetch(`http://localhost:3000/api/user/${userId}`,
    {
        method: 'GET',
		next:{revalidate: 60*30}
    }
    );
    const data = await res.json();
    return data.user_info;
}