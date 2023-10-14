import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Can not connect DB");
  }
}

//postの全記事取得用のAPI
export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//post投稿用のAPI
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const {
      userInfoId,
      title,
      eventType,
      launchDay,
      deadline,
      recruitmentNumbers,
      description,
      matchingMessage,
      requirementLanguages,
      modifiedAt,
    } = await req.json();
    await main();
    const post = await prisma.post.create({
      data: {
        userInfoId,
        title,
        launchDay,
        eventType,
        deadline,
        recruitmentNumbers,
        description,
        matchingMessage,
        requirementLanguages,
        modifiedAt,
      },
    });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
