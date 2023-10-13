import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";
import { main } from "../../route";

//confirmed変更用API
export const PUT = async (req: Request, res: NextResponse) => {
    try {
      const id: number = parseInt(req.url.split("/")[5]);
      await main();
      const post = await prisma.post.update({
        where: { id },
        data: {
            confirmed:true,
          },
      });
      return NextResponse.json({ message: "Success", post }, { status: 200 });
    } catch (err) {
        console.error(err);
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };