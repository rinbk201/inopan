import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../route";

const prisma = new PrismaClient();

//Userに関連する全てのPOST情報を取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const data: {[key: string]: Array<any>} = {"APPROVED": [], "UNAPPROVED": [], "CONFIRMED": [], "BOOKMARK": []}
    const id: number = parseInt(req.url.split("/user/")[1]);
    await main();
    const posts = await prisma.userPostRelationship.findMany({
      where: { userInfoId: id },
      include: {
        post: true,
      }
    });
    for (var i in posts) {
      if (posts[i].relationState === "APPROVED") {
        data["APPROVED"].push(posts[i])
        continue
      }
      if (posts[i].relationState === "UNAPPROVED") {
        if (posts[i].applicationLevel === "BOOKMARK") {
          data["BOOKMARK"].push(posts[i])
          continue
        }
        data["UNAPPROVED"].push(posts[i])
        continue
      }
      if (posts[i].relationState === "CONFIRMED") {
        data["CONFIRMED"].push(posts[i])
        continue
      }
    }
    return NextResponse.json({ message: "Success", data }, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};