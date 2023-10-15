import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const affiliation  = async () => {
    await prisma.affiliation.create({
		data: {
			faculty: "システムデザイン工学部",
			major: "情報システム工学科",
			initial: "AJ"
		}
	})

	await prisma.affiliation.create({
		data: {
			faculty: "未来科学部",
			major: "情報メディア学科",
			initial: "FI"
		}
	})

	await prisma.affiliation.create({
		data: {
			faculty: "工学部",
			major: "情報通信工学学科",
			initial: "EC"
		}
	})

}