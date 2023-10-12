import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../route";

const prisma = new PrismaClient();

//Userの投稿したの情報を取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const user_info_id: number = parseInt(req.url.split("/user/")[1]);
    await main();
    const skills = await prisma.skills.findFirst({ where: { userInfoId: user_info_id } });
    return NextResponse.json({ message: "Success", skills }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const user_info_id: number = parseInt(req.url.split("/user/")[1]);
    const {
      PLANNING,
      PRESENTATION,
      FRONTEND,
      BACKEND,
      DESIGN,
      OTHER
    } = await req.json();
    await main();
    console.log(PLANNING)
    const skills = await prisma.skills.update({
      data: {
        PLANNING,
        PRESENTATION,
        FRONTEND,
        BACKEND,
        DESIGN,
        OTHER
      },
      where: { userInfoId: user_info_id },
    });
  return NextResponse.json({ message: "Success", skills }, { status: 201 });
} catch (err) {
  console.log(err)
  return NextResponse.json({ message: "Error", err }, { status: 500 });
} finally {
  await prisma.$disconnect();
}
  };
