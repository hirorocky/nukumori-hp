"use client";

import useSWR from "swr";

export function ServerStatus()
{
  const { data, error, isLoading } = useSWR(
    "/api/misskey_status",
    async (key: string) =>
    {
      return await fetch(key, { cache: "no-store" }).then((res) => res.json());
    },);

  if (error) return <div>サーバーの稼働状況を取得できませんでした</div>;
  if (isLoading) return <div>サーバーの稼働状況を確認しています...</div>;
  return (
    <div>
      {data.status}
    </div>
  );
}