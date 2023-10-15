import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../../route";

const prisma = new PrismaClient();

//bookmarkをした際
export const POST = async (req: Request, res: NextResponse) => {
  const applicationLevel = "BOOKMARK"
  const relationState = "UNAPPROVED"
  try {
    const userInfoId: number = parseInt(req.url.split("/user/")[1]);
    const {
      postId,
    } = await req.json();
    await main();
    const bookmark = await prisma.userPostRelationship.create({
      data: {
        userInfoId,
        postId,
        applicationLevel,
        relationState
      },
    });
    return NextResponse.json({ message: "Success", bookmark }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
//bookmark解除
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const user_id: number = parseInt(req.url.split("/user/")[1]);
    const {
      postId,
    } = await req.json();
    await main();
    const bookmark = await prisma.userPostRelationship.deleteMany({
      where: {
        AND: [
          { userInfoId: user_id },
          { postId: postId }
        ]
      }
    });
    return NextResponse.json({ message: "Success", bookmark }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//bookmarkしたpostの取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const user_info_id: number = parseInt(req.url.split("/user/")[1]);
    await main();
    const post_relations = await prisma.userPostRelationship.findMany({
      where: {
        AND: [
          { userInfoId: user_info_id },
          { applicationLevel: "BOOKMARK" }
        ]
      },
      include: {
        post: true
      }
    });
    const posts = []
    for (var i in post_relations) {
      posts.push(post_relations[i].post)
    }
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
