import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const user_process = {
	async get_user_info(user_id: number): Promise<any> {
		try {
			const res = await prisma.userInfo.findUnique({
        where: { id: user_id }
      })
			return res
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
			}
		}
	},
  async get_participating_posts(user_id: number): Promise<any> {
    const posts = []
		try {
			const res = await prisma.participants.findMany({
        where: { userInfoId: user_id }
      })
      for(var i = 0; i < res.length; i++) {
        var post = await prisma.post.findUnique({
          where: { id: res[i].postId }
        })
        posts.push(post)
      }
			return posts
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
			}
		}
	},
  async get_interested_posts(user_id: number): Promise<any> {
    const posts = []
		try {
			const res = await prisma.interestedPosts.findMany({
        where: { userInfoId: user_id }
      })
      for(var i = 0; i < res.length; i++) {
        var post = await prisma.post.findUnique({
          where: { id: res[i].postId }
        })
        posts.push(post)
      }
			return posts
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
			}
		}
	},
  async get_user_skills(user_id: number): Promise<any> {
		try {
			const res = await prisma.skills.findMany({
        where: { userInfoId: user_id }
      })
			return res
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
			}
		}
	},
  async get_user_language(user_id: number): Promise<any> {
		try {
			const res = await prisma.programmingLanguages.findMany({
        where: { userInfoId: user_id }
      })
			return res
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
			}
		}
	},
}
export default user_process