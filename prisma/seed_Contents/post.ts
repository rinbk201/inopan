import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const post  = async () => {
    const sample_post1 = await prisma.post.create({
		data: {
			userInfoId: 1,
			title: "HackU",
			eventType: "HACKATHON",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 4,
			description: "LineYahoo株式会社x東京電機大学で開催される電大生限定のハッカソンです！初めての方も初学者の方でも誰でも歓迎です！皆で研鑽しながら互いの技術力を高めましょう＞＜",
			matchingMessage: "ご応募いただきありがとうございました．ぜひあなたと一緒に参加したいと思い希望承諾させていただきました．Discordのリンクを記載しますのでそちらにご参加くださいm(-m-)m  www.xxx.aaaa.ddd.com",
			createdAt: "2023-10-02T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})

	const sample_post2 = await prisma.post.create({
		data: {
			userInfoId: 2,
			title: "HackU",
			eventType: "HACKATHON",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 5,
			description: "LineYahoo株式会社と東京電機大学で開催される電大生限定のハッカソンの募集です．皆さん気軽に参加希望だしていただけると嬉しいです！",
			matchingMessage: "参加希望していただきありがとうございます！　ぜひ一緒にハッカソンに挑戦していただきたいと思い承諾させていただきました．宜しくお願い致します．　コミュニケーションツールはdiscordを使用するため，サーバーにご参加ください．www.www.www.dasdaw.adwasd.wdad.com",
			createdAt: "2023-10-01T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})

	const sample_post3 = await prisma.post.create({
		data: {
			userInfoId: 3,
			title: "HackU",
			eventType: "HACKATHON",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 4,
			description: "電大生限定のハッカソンに一緒に参加しませんか？　テーマは[生活をちょっと便利にするもの]です．こんな物作ってみたい，，，などある方はぜひ一緒に生活を便利にしてみませんか？",
			matchingMessage: "マッチング有難うございます！！一緒に開発を開始する日を心待ちにしています！　参加に際し，次のdiscordサーバーにご参加ください．　　サーバー：www.sadwad.ffefsgrs.sdawdad.com",
			createdAt: "2023-10-01T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})

	const sample_post4 = await prisma.post.create({
		data: {
			userInfoId: 4,
			title: "HackU",
			eventType: "HACKATHON",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 3,
			description: "弊学とLineYahoo株式会社様とで開催されるハッカソンになります．少数での参加を考えており，フロントエンド技術に自信がある方とデザインなどが得意な方を募集しております．我こそは！！っという方のご応募お待ちしています",
			matchingMessage: "ご応募いただきありがとうございます．保有スキルを拝見させていただきぜひ参加していただきたいと思い承諾させていただきました．コミュニケーションツールはdiscordを使用するため，サーバーに参加してください． www.sesfsf.iojs@ijgo.com",
			createdAt: "2023-10-10T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})

	const sample_post5 = await prisma.post.create({
		data: {
			userInfoId: 5,
			title: "HackU",
			eventType: "STUDY",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 5,
			description: "同志募集！！ 友達が少なくて参加したいけど参加できない や ハッカソンをきっかけに研鑽できる友人が欲しい... と考えているそこのあなた！ ぜひ一緒に開発を行いませんか？ チームでコミュニケーションを図りながら楽しく進めたいと考えています！",
			matchingMessage: "希望申請有難うございます！ 一緒に開発をしたいと思い承諾させていただきました． 協力しながら楽しく開発していきましょう！ 参加にあたり次のdiscordサーバーへの参加をお願いします！   www.adwapdma.ifhriduhdu3.com",
			createdAt: "2023-10-01T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})

	const sample_post6 = await prisma.post.create({
		data: {
			userInfoId: 4,
			title: "東京電機大学-Node.js勉強会!!!",
			eventType: "STUDY",
			launchDay: "2023-10-10T13:50:40+09:00",
			deadline: "2023-10-9T13:50:40+09:00",
			recruitmentNumbers: 10,
			description: "Next.jsを一緒に勉強してくれる方探してます！Node.jsに明るい方もそうでない方も大歓迎！",
			matchingMessage: "ご応募いただきありがとうございます．ぜひ参加していただきたいと思い承諾させていただきました．コミュニケーションツールはdiscordを使用するため，サーバーに参加してください． www.sesfsf.iojs@ijgo.com",
			createdAt: "2023-10-01T13:50:40+09:00",
			modifiedAt: "2023-10-10T13:50:40+09:00",
		}
	})


}