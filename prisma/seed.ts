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

	//User
	const sample_user1 = await prisma.user.create({
		data: {
			email: 'XXfiXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

	const sample_user2 = await prisma.user.create({
		data: {
			email: 'XXfiXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

	const sample_user3 = await prisma.user.create({
		data: {
			email: 'XXfiXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

	const sample_user4 = await prisma.user.create({
		data: {
			email: 'XXajXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

	const sample_user5 = await prisma.user.create({
		data: {
			email: 'XXajXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

	const sample_user6 = await prisma.user.create({
		data: {
			email: 'XXecXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

	const sample_user7 = await prisma.user.create({
		data: {
			email: 'XXecXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

	const sample_user8 = await prisma.user.create({
		data: {
			email: 'XXecXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

	const sample_user9 = await prisma.user.create({
		data: {
			email: 'XXfiXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

	const sample_user10 = await prisma.user.create({
		data: {
			email: 'XXajXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

	// Affiliation(学部・学科情報)
	const sample_affiliation1 = await prisma.affiliation.create({
		data: {
			faculty: "システムデザイン工学部",
			major: "情報システム工学科",
			initial: "AJ"
		}
	})

	const sample_affiliation2 = await prisma.affiliation.create({
		data: {
			faculty: "未来科学部",
			major: "情報メディア学科",
			initial: "FI"
		}
	})

	const sample_affiliation3 = await prisma.affiliation.create({
		data: {
			faculty: "工学部",
			major: "情報通信工学学科",
			initial: "EC"
		}
	})

	//UserInfo
	const sample_person1 = await prisma.userInfo.create({
		data: {
			userId: 1,
			displayName: "ちょこ",
			email: "XXfiXXX@ms.dendai.ac.jp",
			affiliationId: 2,
			lab: "情報セキュリティ研究室",
			gender: "MAN",
			hobby: "Youtube, Netflix",
			comment: "経験は少ないですが，協力し合いながら経験を積んでいきたいです！",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "いぬがすき",
		}
	})

	const sample_person2 = await prisma.userInfo.create({
		data: {
			userId: 2,
			displayName: "れおん",
			email: 'XXfiXXX@ms.dendai.ac.jp',
			affiliationId: 2,
			lab: "メディア応用研究室",
			gender: "WOMAN",
			hobby: "寝ること",
			comment: "俺はかわいい",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "ネズミには目がありません",
		}
	})

	const sample_person3 = await prisma.userInfo.create({
		data: {
			userId: 3,
			displayName: "ちーの",
			email: 'XXfiXXX@ms.dendai.ac.jp',
			affiliationId: 2,
			lab: "実空間コンピューティング研究室",
			gender: "MAN",
			hobby: "アニメ鑑賞",
			comment: "バックエンドの開発経験はありますが，フロントエンドは苦手です",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "ゲームも好きなので一緒にやりましょう",
		}
	})

	const sample_person4 = await prisma.userInfo.create({
		data: {
			userId: 4,
			displayName: "らって",
			email: 'XXajXXX@ms.dendai.ac.jp',
			affiliationId: 2,
			lab: "ソフトウェア工学研究室",
			gender: "MAN",
			hobby: "ドライブ",
			comment: "全体的に経験は少ないですが，一緒に成長していきたいです",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "Next.jsを一緒に勉強してくれる方探してます!",
		}
	})

	const sample_person5 = await prisma.userInfo.create({
		data: {
			userId: 5,
			displayName: "私は最強",
			email: 'XXajXXX@ms.dendai.ac.jp',
			affiliationId: 2,
			lab: "情報ネットワーク研究室研究室",
			gender: "WOMAN",
			hobby: "キャンプ",
			comment: "いくつかのハッカソンに参加した経験はありますが，基本はバックエンド担当です",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "現在フロントエンド関係を勉強中なので，どなたか一緒に勉強しましょう",
		}
	})

	const sample_person6 = await prisma.userInfo.create({
		data: {
			userId: 6,
			displayName: "最上",
			email: 'XXecXXX@ms.dendai.ac.jp',
			affiliationId: 3,
			lab: "ネットワークシステム研究室",
			gender: "WOMAN",
			hobby: "お菓子作り",
			comment: "インフラ周りの研究をしているので，そのあたりの知識を活かせるようなイベントに参加してみたいです",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "自宅サーバー構築をしたいのですが，だれかアドバイスplz..",
		}
	})

	const sample_person7= await prisma.userInfo.create({
		data: {
			userId: 7,
			displayName: "ますたーおぶはっかそん",
			email: 'XXecXXX@ms.dendai.ac.jp',
			affiliationId: 3,
			lab: "画像処理研究室",
			gender: "MAN",
			hobby: "サバげー",
			comment: "独学で深層学習を用いた画像分類の勉強をしているので，関連するコンテスト等に参加してみたいです",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "サバげー仲間募集中",
		}
	})

	const sample_person8 = await prisma.userInfo.create({
		data: {
			userId: 8,
			displayName: "がりべん",
			email: 'XXecXXX@ms.dendai.ac.jp',
			affiliationId: 3,
			lab: "暗号研究室",
			gender: "MAN",
			hobby: "釣り",
			comment: "フロント・バック両方の経験を積みたいと考えています！プレゼンやデザインはとても苦手です",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "最近，釣りの自己記録を更新しました！！！",
		}
	})

	const sample_person9 = await prisma.userInfo.create({
		data: {
			userId: 9,
			displayName: "天使",
			email: 'XXfiXXX@ms.dendai.ac.jp',
			affiliationId: 2,
			lab: "情報セキュリティ研究室",
			gender: "WOMAN",
			hobby: "CTF",
			comment: "ハッカソンの中にセキュリティの要素を組み込んで，安全性を評価していただけるような作品を作りたいと思います",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "友達少ないので，ハッカソンなどを通じて交友関係を広げたいです！SECCONなども一緒に出てくれる人募集中！！",
		}
	})

	const sample_person10 = await prisma.userInfo.create({
		data: {
			userId: 10,
			displayName: "神",
			email: 'XXajXXX@ms.dendai.ac.jp',
			affiliationId: 1,
			lab: "",
			gender: "MAN",
			hobby: "読書",
			comment: "入学後からプログラミングを学習していますが，今までグループで製作物を作る機会が無かったので，作品をグループで作ってみたいです",
			discordId: "hogehoge",
			xId: "hogehoge",
			facebookId: "hogehoge",
			freeForm: "初心者ですので，ご迷惑をかけるかもしれません．",
		}
	})

	//Skills
	const sampleskills1 = await prisma.skills.create({
		data: {
		id: 1,
		userInfoId: 1,
		PLANNING: "LEVEL1",
		DESIGN:"LEVEL1",        
		FRONTEND:"LEVEL1",      
		BACKEND:"LEVEL3",       
		PRESENTATION:"LEVEL1",  
		OTHER:"LEVEL1"
		}   
	})

	const sampleskills2 = await prisma.skills.create({
		data: {
		id: 2,
		userInfoId: 2,
		PLANNING: "LEVEL1",
		DESIGN:"LEVEL3",        
		FRONTEND:"LEVEL3",      
		BACKEND:"LEVEL1",       
		PRESENTATION:"LEVEL2",  
		OTHER:"LEVEL1"
		}   
	})

	const sampleskills3 = await prisma.skills.create({
		data: {
		id: 3,
		userInfoId: 3,
		PLANNING: "LEVEL1",
		DESIGN:"LEVEL1",        
		FRONTEND:"LEVEL1",      
		BACKEND:"LEVEL4",       
		PRESENTATION:"LEVEL1",  
		OTHER:"LEVEL3"
		}   
	})

	const sampleskills4 = await prisma.skills.create({
		data: {
		id: 4,
		userInfoId: 4,
		PLANNING: "LEVEL1",
		DESIGN:"LEVEL1",        
		FRONTEND:"LEVEL2",      
		BACKEND:"LEVEL1",       
		PRESENTATION:"LEVEL1",  
		OTHER:"LEVEL1"
		}   
	})

	const sampleskills5 = await prisma.skills.create({
		data: {
		id: 5,
		userInfoId: 5,
		PLANNING: "LEVEL3",
		DESIGN:"LEVEL1",        
		FRONTEND:"LEVEL2",      
		BACKEND:"LEVEL5",       
		PRESENTATION:"LEVEL1",  
		OTHER:"LEVEL3"
		}   
	})

	const sampleskills6 = await prisma.skills.create({
		data: {
		id: 6,
		userInfoId: 6,
		PLANNING: "LEVEL3",
		DESIGN:"LEVEL2",        
		FRONTEND:"LEVEL1",      
		BACKEND:"LEVEL5",       
		PRESENTATION:"LEVEL1",  
		OTHER:"LEVEL2"
		}   
	})

	const sampleskills7 = await prisma.skills.create({
		data: {
		id: 7,
		userInfoId: 7,
		PLANNING: "LEVEL3",
		DESIGN:"LEVEL2",        
		FRONTEND:"LEVEL1",      
		BACKEND:"LEVEL5",       
		PRESENTATION:"LEVEL1",  
		OTHER:"LEVEL2"
		}   
	})

	const sampleskills8 = await prisma.skills.create({
		data: {
		id: 8,
		userInfoId: 8,
		PLANNING: "LEVEL1",
		DESIGN:"LEVEL1",        
		FRONTEND:"LEVEL2",      
		BACKEND:"LEVEL2",       
		PRESENTATION:"LEVEL3",  
		OTHER:"LEVEL1"
		}   
	})

	const sampleskills9 = await prisma.skills.create({
		data: {
		id: 9,
		userInfoId: 9,
		PLANNING: "LEVEL1",
		DESIGN:"LEVEL1",        
		FRONTEND:"LEVEL1",      
		BACKEND:"LEVEL4",       
		PRESENTATION:"LEVEL1",  
		OTHER:"LEVEL2"
		}   
	})

	const sampleskills10 = await prisma.skills.create({
		data: {
		id: 10,
		userInfoId: 10,
		PLANNING: "LEVEL2",
		DESIGN:"LEVEL2",        
		FRONTEND:"LEVEL2",      
		BACKEND:"LEVEL2",       
		PRESENTATION:"LEVEL2",  
		OTHER:"LEVEL2"
		}   
	})

	// Post 
	const samplepost1 = await prisma.post.create({
		data: {
			userInfoId: 1,
			title: "HackU",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 4,
			description: "LineYahoo株式会社x東京電機大学で開催される電大生限定のハッカソンです！初めての方も初学者の方でも誰でも歓迎です！皆で研鑽しながら互いの技術力を高めましょう＞＜",
			matchingMessage: "ご応募いただきありがとうございました．ぜひあなたと一緒に参加したいと思い希望承諾させていただきました．Discordのリンクを記載しますのでそちらにご参加くださいm(-m-)m  www.xxx.aaaa.ddd.com",
			createdAt: "2023-10-02T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})

	const samplepost2 = await prisma.post.create({
		data: {
			userInfoId: 2,
			title: "HackU",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 5,
			description: "LineYahoo株式会社と東京電機大学で開催される電大生限定のハッカソンの募集です．皆さん気軽に参加希望だしていただけると嬉しいです！",
			matchingMessage: "参加希望していただきありがとうございます！　ぜひ一緒にハッカソンに挑戦していただきたいと思い承諾させていただきました．宜しくお願い致します．　コミュニケーションツールはdiscordを使用するため，サーバーにご参加ください．www.www.www.dasdaw.adwasd.wdad.com",
			createdAt: "2023-10-01T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})

	const samplepost3 = await prisma.post.create({
		data: {
			userInfoId: 3,
			title: "HackU",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 4,
			description: "電大生限定のハッカソンに一緒に参加しませんか？　テーマは[生活をちょっと便利にするもの]です．こんな物作ってみたい，，，などある方はぜひ一緒に生活を便利にしてみませんか？",
			matchingMessage: "マッチング有難うございます！！一緒に開発を開始する日を心待ちにしています！　参加に際し，次のdiscordサーバーにご参加ください．　　サーバー：www.sadwad.ffefsgrs.sdawdad.com",
			createdAt: "2023-10-01T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})

	const samplepost4 = await prisma.post.create({
		data: {
			userInfoId: 4,
			title: "HackU",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 3,
			description: "弊学とLineYahoo株式会社様とで開催されるハッカソンになります．少数での参加を考えており，フロントエンド技術に自信がある方とデザインなどが得意な方を募集しております．我こそは！！っという方のご応募お待ちしています",
			matchingMessage: "ご応募いただきありがとうございます．保有スキルを拝見させていただきぜひ参加していただきたいと思い承諾させていただきました．コミュニケーションツールはdiscordを使用するため，サーバーに参加してください． www.sesfsf.iojs@ijgo.com",
			createdAt: "2023-10-10T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})

	const samplepost5 = await prisma.post.create({
		data: {
			userInfoId: 5,
			title: "HackU",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 5,
			description: "同志募集！！ 友達が少なくて参加したいけど参加できない や ハッカソンをきっかけに研鑽できる友人が欲しい... と考えているそこのあなた！ ぜひ一緒に開発を行いませんか？ チームでコミュニケーションを図りながら楽しく進めたいと考えています！",
			matchingMessage: "希望申請有難うございます！ 一緒に開発をしたいと思い承諾させていただきました． 協力しながら楽しく開発していきましょう！ 参加にあたり次のdiscordサーバーへの参加をお願いします！   www.adwapdma.ifhriduhdu3.com",
			createdAt: "2023-10-01T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})



		// const requirementLanguages1 = await prisma.requirementLanguages.create( {
		
	// })
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})