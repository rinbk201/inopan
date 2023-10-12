import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../route";

const prisma = new PrismaClient();

//Userが登録した言語情報の取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const user_info_id: number = parseInt(req.url.split("/user/")[1]);
    await main();
    const languages = await prisma.programmingLanguages.findMany({
      where:{
        userInfoId: user_info_id
      }, 
      include: {
        language: true,
      }
    });
    return NextResponse.json({ message: "Success", languages }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};