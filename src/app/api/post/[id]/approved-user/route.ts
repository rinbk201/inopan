import { prisma } from "@/lib/prismaClient";
import { main } from "../../route";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
    try {
      const id: number = parseInt(req.url.split("/")[5]);//http://localhost:3000/api/post/2/participants
      await main();
      const post = await prisma.participants.findMany({ where: { id } }); 
      return NextResponse.json({ message: "Success", post }, { status: 200 });
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
        launchDay,
        deadline,
        recruitmentNumbers,
        description,
        matchingMessage,
        requirementLanguages,
        modifiedAt,
      } = await req.json();
      const id: number = parseInt(req.url.split("/")[5]);//http://localhost:3000/api/post/2/participants
      await main();
      let participants = await prisma.participants.findUnique({ where: { id } });
      if(participants != null){
        participants :participants[] = [...participants, {}];
      }
      
      const post = await prisma.post.({
        data: {
            id,
          userInfoId,
        },
      });
      return NextResponse.json({ message: "Success", post }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };