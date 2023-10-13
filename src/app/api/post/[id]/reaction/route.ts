import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../route";

const prisma = new PrismaClient();


//postに対するユーザーの承認段階と申し込み状態を取得するAPI
export const GET = async (req: Request, res: NextResponse) => {
    try {
      
      const postId: number = parseInt(req.url.split("/")[5]); //http://localhost:3000/api/post/2/reaction
      await main();
      const userRelation = await prisma.reaction.findMany({
        where: { postId },
      });
      return NextResponse.json(
        { message: "Success", userRelation },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };