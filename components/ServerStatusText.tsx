import { getServerStatus } from "@libs/microcms";

export async function ServerStatusText()
{
  const status = await getServerStatus();

  return (
    <div>
      {status}
    </div>
  );
}