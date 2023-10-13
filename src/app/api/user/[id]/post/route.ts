import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../route";

const prisma = new PrismaClient();

//Userに関連する全てのPOST情報を取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const posts: {[key: string]: Array<any>} = {"APPROVED": [], "UNAPPROVED": [], "CONFIRMED": [], "BOOKMARK": []}
    const id: number = parseInt(req.url.split("/user/")[1]);
    await main();
    const post_list = await prisma.userPostRelationship.findMany({
      where: { userInfoId: id },
      include: {
        post: true,
      }
    });
    for (var i in post_list) {
      if (post_list[i].relationState === "APPROVED") {
        if (post_list[i].post.confirmed === true) {
          posts["CONFIRMED"].push(post_list[i])
          continue
        }
        posts["APPROVED"].push(post_list[i])
        continue
      }
      if (post_list[i].relationState === "UNAPPROVED") {
        if (post_list[i].applicationLevel === "BOOKMARK") {
          posts["BOOKMARK"].push(post_list[i])
          continue
        }
        posts["UNAPPROVED"].push(post_list[i])
        continue
      }
    }
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};