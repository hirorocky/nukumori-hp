import { getServerStatus } from "@libs/microcms";

export async function ServerStatus()
{
  const status = await getServerStatus();

  return (
    <div>
      {status}
    </div>
  );
}