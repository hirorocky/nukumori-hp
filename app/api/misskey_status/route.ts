import { NextResponse } from "next/server";
import { getServerStatus } from "@libs/microcms";

export async function GET() {
  const status = await getServerStatus();

  return NextResponse.json({
    status: status,
  });
}
