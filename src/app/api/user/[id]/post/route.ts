import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../route";

const prisma = new PrismaClient();

//Userに関連する全てのPOST情報を取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/user/")[1]);
    await main();
    const post = await prisma.userPostRelationship.findMany({ where: { userInfoId: id } }); //http://localhost:3000/api/user/post/3
    console.log(post)
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};