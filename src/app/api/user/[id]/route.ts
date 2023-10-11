import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../route";

const prisma = new PrismaClient();

//UserInfoの情報を取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const user_info_id: number = parseInt(req.url.split("/user/")[1]);
    await main();
    const user_info = await prisma.userInfo.findFirst({ where: { id: user_info_id } }); //http://localhost:3000/api/user/3
    return NextResponse.json({ message: "Success", user_info }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};