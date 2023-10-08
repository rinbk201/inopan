import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const user_process = {
	async get_user_profile(id: Number): Promise<any> {
		try {
			const res = await await prisma.profile.findUnique({
        where: { user_ID: id }
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