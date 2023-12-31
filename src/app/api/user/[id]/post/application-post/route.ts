import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../../route";

const prisma = new PrismaClient();

//新たに参加希望を出した際に登録
export const POST = async (req: Request, res: NextResponse) => {
    try {
      const relationState = "UNAPPROVED"
      const userInfoId: number = parseInt(req.url.split("/user/")[1]);
      const {
        postId,
        applicationLevel,
      } = await req.json();
      await main();
      const application = await prisma.userPostRelationship.create({
        data: {
          userInfoId,
          postId,
          applicationLevel,
          relationState
        },
      });
      return NextResponse.json({ message: "Success", application }, { status: 201 });
    } catch (err) {
      console.log(err)
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };
//希望解除
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const user_id: number = parseInt(req.url.split("/user/")[1]);
		const {
			postId,
		} = await req.json();
    await main();
    const post = await prisma.userPostRelationship.deleteMany({
			where: {
				AND: [
					{ userInfoId: user_id },
					{ postId: postId }
				]
			}
		});
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//参加申請中の投稿を取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const user_info_id: number = parseInt(req.url.split("/user/")[1]);
    await main();
    const post_relations = await prisma.userPostRelationship.findMany({
      where: {
				AND: [
					{ userInfoId: user_info_id },
					{ relationState: "UNAPPROVED" }
				]
			},
      include: {
        post: true
      }
    });
    const posts = []
    for (var i in post_relations) {
      if (post_relations[i].applicationLevel !== "BOOKMARK") {
        posts.push(post_relations[i].post)
      }
    }
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
