import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../route";
import { level_int_to_string, level_string_to_int } from "@/lib/utils/transfer";

const prisma = new PrismaClient();

//Userの投稿したの情報を取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const user_info_id: number = parseInt(req.url.split("/user/")[1]);
    await main();
    const skills_S: Record<string, any> | null = await prisma.skills.findFirst({ where: { userInfoId: user_info_id } });
    const skills = {} as Record<string, number | undefined>;
    for (const skill in skills_S) {
      if (skill !== "id" && skill !== "userInfoId") {
        skills[skill] = level_string_to_int(skills_S[skill]);
      }
    }
    return NextResponse.json({ message: "Success", skills }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const user_info_id: number = parseInt(req.url.split("/user/")[1]);
    var {
      PLANNING,
      PRESENTATION,
      FRONTEND,
      BACKEND,
      DESIGN,
      OTHER
    }: Record<string, any> = await req.json();
    await main();
    PLANNING = level_int_to_string(PLANNING)
    PRESENTATION = level_int_to_string(PRESENTATION)
    FRONTEND = level_int_to_string(FRONTEND)
    BACKEND = level_int_to_string(BACKEND)
    DESIGN = level_int_to_string(DESIGN)
    OTHER = level_int_to_string(OTHER)
    const skills = await prisma.skills.update({
      data: {
        PLANNING,
        PRESENTATION,
        FRONTEND,
        BACKEND,
        DESIGN,
        OTHER
      },
      where: { userInfoId: user_info_id },
    });
  return NextResponse.json({ message: "Success", skills }, { status: 201 });
} catch (err) {
  console.log(err)
  return NextResponse.json({ message: "Error", err }, { status: 500 });
} finally {
  await prisma.$disconnect();
}
  };
