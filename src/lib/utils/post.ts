import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const post_process = {
	async get_all_posts(): Promise<any> {
		try {
			const res = await prisma.post.findMany()
			return res
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
			}
		}
	},
}
export default post_process