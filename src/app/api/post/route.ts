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
    return NextResponse.json({message: "Success", posts},{status: 200});
  } catch (err) {
    return NextResponse.json({message: "Error", err},{status:500});
  } finally {
    await prisma.$disconnect();
  }
};
