import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../../route";

const prisma = new PrismaClient();

//参加予定の投稿を取得
export const GET = async (req: Request, res: NextResponse) => {
	try {
		const user_info_id: number = parseInt(req.url.split("/user/")[1]);
		await main();
		const post_relations = await prisma.userPostRelationship.findMany({
			where: {
				AND: [
					{ userInfoId: user_info_id },
					{ relationState: "APPROVED" }
				]
			},
			include: {
				post: true
			}
		});
		const posts = []
		for (var i in post_relations) {
			posts.push(post_relations[i].post)
		}
		return NextResponse.json({ message: "Success", posts }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ message: "Error", err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};
