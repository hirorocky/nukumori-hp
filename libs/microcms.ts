import { createClient } from "microcms-js-sdk";
import type { MicroCMSDate } from "microcms-js-sdk";

export type ServerStatus = {
  text: string;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

export const getServerStatus = async () => {
  const status = await client.get<ServerStatus>({
    endpoint: "status",
  });

  return status.text;
};
