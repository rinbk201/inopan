import { PrismaClient } from '@prisma/client'
import { Faker, en, ja } from '@faker-js/faker'
const prisma = new PrismaClient()
const faker = new Faker({ locale: [ja] })

for(let i = 0; i < 100; i++) {
	console.log(String(faker.internet.email()))
}

async function main() {
	const sample_person1 = await prisma.profile.create({
		data: {
			name: '電大太郎',
			display_name: "でん君",
			email: 'denkun@example.com',
			affiliation_id: 1,
			lab: "情報セキュリティ研究室",
			gender: "男",
			hobby: "キャンプ",
			comment: "経験少ないけど頑張ります！",
			DiscordID: "hogehoge",
			XID: "hogehoge",
			FaceBookID: "hogehoge",
			free_form: "特にフロントエンドに興味があります",
			deleted_at: "2023-22-22"
		}
	})

	const sample_person2 = await prisma.profile.create({
		data: {
			name: '電大太郎',
			display_name: "でん君",
			email: 'denkun@example.com',
			affiliation_id: 1,
			lab: "情報セキュリティ研究室",
			gender: "男",
			hobby: "キャンプ",
			comment: "経験少ないけど頑張ります！",
			DiscordID: "hogehoge",
			XID: "hogehoge",
			FaceBookID: "hogehoge",
			free_form: "特にフロントエンドに興味があります",
			deleted_at: "2023-22-22"
		}
	})

	const samplepost1 = await prisma.posts.create({
		data: {
			id: 1,
			user_info_ID: 1,
			title: "HackU",
			launchDate: "2023-10-08",
			deadlineDate: "2023-10-20",
			recruitment_numbers: 5,
			description: "電大とLineYahoo株式会社で開催するハッカソン",
			matching_message: "一緒に頑張りましょう！ こちらのサーバーに参加してください"
			}
	})
	console.log({sample_person1, sample_person2, samplepost1})
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})