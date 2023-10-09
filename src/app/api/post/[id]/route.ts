import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../route";

const prisma = new PrismaClient();

//postの詳細情報を取得API
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/post/")[1]);
    await main();
    const post = await prisma.post.findFirst({ where: { id } }); //http://localhost:3000/api/post/3
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//postの編集用API
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/post/")[1]);

    const {
      title,
      launchDay,
      deadline,
      recruitmentNumbers,
      matchingMessage,
      requirementLanguages,
      modifiedAt,
    } = await req.json();

    await main();
    const post = await prisma.post.update({
      data: {
        title,
        launchDay,
        deadline,
        recruitmentNumbers,
        matchingMessage,
        requirementLanguages,
        modifiedAt,
      },
      where: { id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
