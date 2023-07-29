import { ReactNode } from "react";
import { Metadata } from "next";
import "@styles/globals.css";

const title = "ぬくもりげいすきー";
const description = "ゲイの方向けの、分散型SNS Misskeyサーバーです。ぬくもりのあるウェブコミュニケーションをあなたの日常に。";
const imageUrl = "https://storage.googleapis.com/mi_nukumori_gay_bucket/mi_nukumori_gay_bucket/banner.jpg";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: "website",
    url: "https://nukumori-gay.space/",
    images: [imageUrl],
    siteName: "ぬくもりげいすきー",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }: { children: ReactNode })
{
  return (
    <html lang="ja">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}