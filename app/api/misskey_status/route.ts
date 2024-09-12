import { NextResponse } from "next/server";
import { getServerStatus } from "@libs/microcms";
import { ServerStatus } from "@domain/ServerStatus";

export const dynamic = "force-dynamic";

export async function GET() {
  const status = await getServerStatus();

  return NextResponse.json({
    status: status,
  } as ServerStatus);
}
