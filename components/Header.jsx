import Head from "next/head";
import { useRouter } from "next/router";

const description = "ゲイの方向けの、分散型SNS Misskeyサーバーです。ぬくもりのあるウェブコミュニケーションをあなたの日常に。";
const imageUrl = "https://storage.googleapis.com/mi_nukumori_gay_bucket/mi_nukumori_gay_bucket/banner.jpg";

export default function Header({ title }) {
  const router = useRouter();
  const currentUrl = process.env.NEXT_PUBLIC_SITE_URL + router.pathname;
  return <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico"/>
    <meta name="description" content={description}/>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={currentUrl} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:site_name" content="ぬくもりげいすきー" />
    <meta property="og:locale" content="ja_JP"  />
    <meta name="twitter:card" content="summary_large_image"/>
  </Head>;
}
