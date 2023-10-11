import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../../route";

const prisma = new PrismaClient();

//bookmarkをした際
export const POST = async (req: Request, res: NextResponse) => {
    const applicationLevel = "BOOKMARK"
    const rerationState = "UNAPPROVED"
    try {
      const userInfoId: number = parseInt(req.url.split("/user/")[1]);
      const {
        postId,
      } = await req.json();
      await main();
      const bookmark = await prisma.userPostRelationship.create({
        data: {
          userInfoId,
          postId,
          applicationLevel,
          rerationState
        },
      });
      return NextResponse.json({ message: "Success", bookmark }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };
//bookmark解除
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const user_id: number = parseInt(req.url.split("/user/")[1]);
		const {
			postId,
		} = await req.json();
    await main();
    const bookmark = await prisma.userPostRelationship.deleteMany({
			where: {
				AND: [
					{ userInfoId: user_id },
					{ postId: postId }
				]
			}
		});
    return NextResponse.json({ message: "Success", bookmark }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
