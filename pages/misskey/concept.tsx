import Head from "next/head";
import Footer from "@components/Footer.jsx";
import Link from "next/link";

export default function Concept()
{
  return (
    <>
      <Head>
        <title>ぬくもりげいすきー - コンセプト</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-800 min-h-[90vh]">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-6xl">コンセプト</h1>
              <p className="mt-6 text-base leading-8 text-gray-200">
                こんにちは。このサーバーを管理しているhiroです。
              </p>
              <p className="mt-4 text-base leading-8 text-gray-200">
                まず、ここでいう「コンセプト」とはこのサーバーに参加する皆さんの振るまいに対する、管理者からの「お願い」と捉えてください。
                ルールではなくお願いなので、これに従わないからといって何かが起きるわけではありません。
                コンセプトに合わない振る舞いを否定するような行為もお控えください。
                ただし利用規約は守ってください。
              </p>
              <p className="mt-4 text-base leading-8 text-gray-200">
                私が最初に考えた、このサーバーへの想いを、暫定のコンセプトとします。
                つまり、コンセプトは可変であり、皆さんの様子を見ながら、コンセプトを変更する可能性があります。
                以下、このサーバーへの想いを記します。
              </p>
              <p className="mt-4 text-base leading-8 text-gray-200">
                少し自分語りをします。
                私は小学校5年生くらいの頃に自分がゲイだと自覚しました。
                しかし当時、私の周りではゲイとは想定外のもの、近くにあるはずのないもの、つまり「非日常」でした。
                さいわいなことに、とり立てて辛い経験をしたわけではありません。ただ、日常にゲイとしての自分はいませんでした。
                なにか後ろめたいような、嘘をついているような感覚がそこにはありました。
              </p>
              <p className="mt-4 text-base leading-8 text-gray-200">
                そして現在に至るまで、私は少しずつ、家族や、親しい友人、会社の方々にカミングアウトできています。
                日常にゲイとしての自分が確かに芽生えているのです。ゲイであることを知ってもらいながら、普通に生活をしています。
                恋愛の話はしますが、その頻度は低く、むしろご飯のこと、寝ること、働くことなどの話が多いです。
                この「日常に、ゲイであることが溶け込んでいる状態」がとても心地よいと思っています。
                前向きで、なんの偽りもない自分でいられる気がします。
              </p>

              <p className="mt-4 text-base border-solid border rounded-lg p-4 border-gray-500 font-bold leading-8 text-orange-300">
                カミングアウトを無条件に推奨する意図はありません。
                この辺りはたまたま私が上手くいっているだけで、簡単な問題ではないと認識しています。
              </p>

              <p className="mt-4 text-base leading-8 text-gray-200">
                ようやくコンセプトの話になります。
                端的にいうと、ゲイの日常を世の中に広めたい、と思っています。
                ゲイの方々が普段何を考え、何をしているのか、その日常をパブリックな場に共有したいのです。
                もしかしたら私だけかもしれませんが、公然の場で「ゲイだ」と言うと恋愛や性の話に注目が生きがちでした。
                しかし、私は社会に生きる人間として、食べて寝て、働いています。
                ゲイを非日常や特別なものにしたくない。
              </p>
              <p className="mt-6 text-base leading-8 text-gray-200">
                したがって、お願いはシンプルです。
                日常を共有してください。
                私たちは確かにここに生きていて、ぬくもりをもっている。
                それを表現してください。
              </p>
              <p className="mt-4 text-base leading-8 text-gray-400">
                2023/3/25 hiro
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/"><a className="text-sm font-semibold leading-6 text-gray-100"><span aria-hidden="true">←</span> 戻る</a></Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}