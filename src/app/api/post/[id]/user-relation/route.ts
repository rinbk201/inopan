import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../route";

const prisma = new PrismaClient();

//post投稿用のAPI
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const postId: number = parseInt(req.url.split("/")[5]);
    const { 
      userInfoId,
      applicationLevel,
     } = await req.json();
    const relationState = "UNAPPROVED";
    await main();
    const userPostRelationship = await prisma.userPostRelationship.create({
      data: {
        userInfoId,
        postId,
        applicationLevel,
        relationState,
      },
    });
    return NextResponse.json(
      { message: "Success", userPostRelationship },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//postに対するユーザーの承認段階と申し込み状態を取得するAPI
export const GET = async (req: Request, res: NextResponse) => {
  try {
    
    const postId: number = parseInt(req.url.split("/")[5]); //http://localhost:3000/api/post/2/user-relation
    await main();
    const userRelation = await prisma.userPostRelationship.findMany({
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

//postの状態編集用API
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const postId: number = parseInt(req.url.split("/")[5]);

    const { userInfoId,relationState } = await req.json();
    
    await main();
    const userPostRelationship = await prisma.userPostRelationship.update({
      data: {
        relationState
      },
      where: {
        postId_userInfoId: {
          postId: postId,
          userInfoId: userInfoId,
        }
      },
    });
    return NextResponse.json(
      { message: "Success", userPostRelationship },
      { status: 200 }
    );
  } catch (err) {
    console.error(err); // サーバーログにエラー内容を出力
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//POSTの削除時にAPI
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const postId: number = parseInt(req.url.split("/")[5]);
    const { userInfoId } = await req.json();
    await main();
    const userPostRelationship = await prisma.userPostRelationship.delete({
      where: {
        postId_userInfoId: {
          postId: postId,
          userInfoId: userInfoId,
        },
      },
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
