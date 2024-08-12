"use client";

import useSWR from "swr";
import { ServerStatus } from "@domain/ServerStatus";

export function ServerStatusText()
{
  const { data, error, isLoading } = useSWR(
    "/api/misskey_status",
    async (key: string) =>
    {
      return await fetch(key, { cache: "no-store" })
        .then((res) => res.json())
        .then((data) => data as ServerStatus);
    },);

  if (error) return <div>サーバーの稼働状況を取得できませんでした</div>;
  if (isLoading || data === undefined) return <div>サーバーの稼働状況を確認しています...</div>;
  return (
    <div>
      {data.status}
    </div>
  );
}