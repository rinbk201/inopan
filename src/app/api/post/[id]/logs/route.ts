import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";
import { main } from "../../route";

//参加履歴のログを取得
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


  //Logを発火
export const POST = async (req: Request, res: NextResponse) => {
    try {
      const {
        userInfoId,
        title,
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
  