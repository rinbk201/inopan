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

//UserInfoの編集用API
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const user_info_id: number = parseInt(req.url.split("/user/")[1]);

    const {
      email,
      displayName,
      affiliationId,
      lab,
      gender,
      hobby,
      comment,
      discordId,
      xId,
      facebookId,
      freeForm
    } = await req.json();

    await main();
    const post = await prisma.userInfo.update({
      data: {
        email,
        displayName,
        affiliationId,
        lab,
        gender,
        hobby,
        comment,
        discordId,
        xId,
        facebookId,
        freeForm
      },
      where: { id: user_info_id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};