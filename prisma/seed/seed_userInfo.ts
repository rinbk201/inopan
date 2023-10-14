import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const userInfo  = async () => {
    await prisma.userInfo.create({
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

    await prisma.userInfo.create({
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

    await prisma.userInfo.create({
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

    await prisma.userInfo.create({
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

    await prisma.userInfo.create({
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

    await prisma.userInfo.create({
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

    await prisma.userInfo.create({
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

    await prisma.userInfo.create({
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

    await prisma.userInfo.create({
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

    await prisma.userInfo.create({
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





}