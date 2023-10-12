import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../route";

const prisma = new PrismaClient();

//post投稿用のAPI
export const POST = async (req: Request, res: NextResponse) => {
    try {
      const postId: number = parseInt(req.url.split("/")[5]);
      const {userInfoId} = await req.json();
      const applicationLevel = 
      await main();
      const userPostRelationship = await prisma.userPostRelationship.create({
        data: {
            
            userInfoId,
            postId,
            applicationLevel,
            rerationState: $Enums.RelationState;
          
        },
      });
      return NextResponse.json({ message: "Success", post }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };
  

//postに対するユーザーの承認段階と申し込み状態を取得するAPI
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/")[5]); //http://localhost:3000/api/post/2/user-reration
    await main();
    const userReration = await prisma.userPostRelationship.findFirst({
      where: { id },
    });
    return NextResponse.json(
      { message: "Success", userReration },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//postの状態編集用API
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const postId: number = parseInt(req.url.split("/")[5]);

    const { id, userInfoId, applicationLevel, rerationState } =
      await req.json();

    await main();
    const userPostRelationship = await prisma.userPostRelationship.update({
      data: {
        id,
        userInfoId,
        postId,
        applicationLevel,
        rerationState,
      },
      where: { id },
    });
    return NextResponse.json(
      { message: "Success", userPostRelationship },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//POSTの削除時にAPI
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/post/")[1]);
    await main();
    const post = await prisma.post.delete({ where: { id } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
