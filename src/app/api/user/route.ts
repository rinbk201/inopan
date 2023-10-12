import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Can not connect DB");
  }
}