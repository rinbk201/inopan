import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../../route";
import { level_string_to_int } from "@/lib/utils/transfer"

const prisma = new PrismaClient();

//Userが登録した言語情報の取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const user_info_id: number = parseInt(req.url.split("/user/")[1]);
    await main();
    const languages_S: Record<string, any> | null = await prisma.programmingLanguages.findMany({ where: { userInfoId: user_info_id }, include: { language: true} });
    var languages = {} as Record<string, string | number| undefined>;
    const language_N = []
    for (const i in languages_S) {
      const language = {
        "languageName": languages_S[i].language.languageName,
        "level": level_string_to_int(languages_S[i].level)
      }
      language_N.push(language)
    }
    return NextResponse.json({ message: "Success", language_N }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

