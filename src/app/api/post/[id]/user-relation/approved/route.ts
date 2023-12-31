import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../../route";


const prisma = new PrismaClient();

//userInfoを返却
//postに対するユーザーの承認段階と申し込み状態を取得するAPI
export const GET = async (req: Request, res: NextResponse) => {
    try {
      const relationState="APPROVED";
      const postId: number = parseInt(req.url.split("/")[5]); //http://localhost:3000/api/post/2/user-relation/
      await main();
      const userRelation = await prisma.userPostRelationship.findMany({
        where: {
              postId,
              relationState
          },
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