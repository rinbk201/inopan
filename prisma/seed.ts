import { PrismaClient } from '@prisma/client'
//import { Faker, en, ja } from '@faker-js/faker'
//import { allFakers, allLocales } from '@faker-js/faker';
const prisma = new PrismaClient()
/*
const faker = new Faker({ locale: [ja] })
const faker_en = new Faker({ locale: [en] })
console.log(allFakers['ja']); // the prebuilt Faker instance for de_AT
console.log(allLocales['ja']); // the raw locale definitions for de_AT
for(let i = 0; i < 100; i++) {
	console.log(String(faker.person.sex()))
}
*/

async function main() {
  const sample_user1 = await prisma.user.create({
		data: {
			email: 'denkun@example.com',
			password: 'test',
		}
	})

  const sample_user2 = await prisma.user.create({
		data: {
			email: 'denchan@example.com',
			password: 'test',
		}
	})

	const sample_affiliation = await prisma.affiliation.create({
		data: {
			id: 1,
			faculty: "未来科学部",
  			major: "情報メディア学科",
  			initial: "FI"
		}
	})

	const sample_person1 = await prisma.userInfo.create({
		data: {
			userId: 1,
			displayName: "でん君",
			email: 'denkun@example.com',
			affiliationId: 1,
			lab: "情報セキュリティ研究室",
			gender: "MAN",
			hobby: "キャンプ",
			comment: "経験少ないけど頑張ります！",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "特にフロントエンドに興味があります",
		}
	})

	const sample_person2 = await prisma.userInfo.create({
		data: {
			userId: 2,
			displayName: "でんちゃん",
			email: 'denkun@example.com',
			affiliationId: 1,
			lab: "ビジュアルコンピューティング研究室",
			gender: "WOMAN",
			hobby: "飲み会",
			comment: "経験少ないけど頑張ります！",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "特にフロントエンドに興味があります",
		}
	})

	const samplepost1 = await prisma.post.create({
		data: {
			userInfoId: 1,
			title: "HackU",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-10T13:50:40+09:00",
			recruitmentNumbers: 5,
			description: "test",
			matchingMessage: "Matching ome",
			createdAt: "2023-10-10T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
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