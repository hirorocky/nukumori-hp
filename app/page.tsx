import Footer from "@components/Footer";
import Link from "next/link";
import Image from "next/image";
import mogePic from "../public/moge.png";

export default function Home()
{
  return (
    <>
      <main className="bg-gray-800 min-h-[90vh]">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-5xl py-32 sm:py-48">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">ぬくもりげいすきー</h1>
              <p className="mt-6 text-base leading-8 text-gray-400">
                こちらは、ゲイの方が利用されることを想定した、分散型SNS Misskeyのサーバーです。
              </p>
              <p className="text-base leading-8 text-gray-400">
                日常の中に、ぬくもりのあるコミュニケーションを、もうひとつ築いてみませんか。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://mi.nukumori-gay.space" className="inline-flex rounded-md bg-gradient-to-r to-orange-600 from-amber-400 hover:saturate-150 shadow-lg shadow-orange-500/50 px-3.5 py-2.5 text-xl font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                  <svg className="w-7 h-7 mr-2" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M34.16 106.51C18.73 106.51 6.19 87.44 6.19 64c0-23.44 12.55-42.51 27.97-42.51c15.42 0 27.97 19.07 27.97 42.51c0 23.44-12.55 42.51-27.97 42.51z" fill="#fafafa"></path>
                      <path d="M34.16 23.49c6.63 0 12.98 4 17.87 11.27c5.22 7.75 8.1 18.14 8.1 29.24s-2.88 21.49-8.1 29.24c-4.89 7.27-11.24 11.27-17.87 11.27s-12.98-4-17.87-11.27C11.06 85.49 8.19 75.1 8.19 64s2.88-21.49 8.1-29.24c4.89-7.27 11.23-11.27 17.87-11.27m0-4C17.61 19.49 4.19 39.42 4.19 64s13.42 44.51 29.97 44.51S64.13 88.58 64.13 64S50.71 19.49 34.16 19.49z" fill="#b0bec5"></path>
                      <linearGradient id="IconifyId17ecdb2904d178eab7946" gradientUnits="userSpaceOnUse" x1="22.523" y1="46.676" x2="22.523" y2="82.083">
                        <stop offset="0" stop-color="#424242"></stop>
                        <stop offset="1" stop-color="#212121"> </stop>
                      </linearGradient>
                      <path d="M25.63 59.84c-2.7-2.54-2.1-7.58 1.36-11.26c.18-.19.36-.37.55-.54c-1.54-.87-3.23-1.36-5.01-1.36c-7.19 0-13.02 7.93-13.02 17.7s5.83 17.7 13.02 17.7s13.02-7.93 13.02-17.7c0-1.75-.19-3.45-.54-5.05c-3.24 2.33-7.11 2.64-9.38.51z" fill="url(#IconifyId17ecdb2904d178eab7946)"></path>
                      <g>
                        <ellipse cx="93.84" cy="64" rx="29.97" ry="44.51" fill="#eee"> </ellipse>
                        <path d="M93.84 106.51c-15.42 0-27.97-19.07-27.97-42.51c0-23.44 12.55-42.51 27.97-42.51c15.42 0 27.97 19.07 27.97 42.51c0 23.44-12.54 42.51-27.97 42.51z" fill="#fafafa"> </path>
                        <path d="M93.84 23.49c6.63 0 12.98 4 17.87 11.27c5.22 7.75 8.1 18.14 8.1 29.24s-2.88 21.49-8.1 29.24c-4.89 7.27-11.24 11.27-17.87 11.27s-12.98-4-17.87-11.27c-5.22-7.75-8.1-18.14-8.1-29.24s2.88-21.49 8.1-29.24c4.89-7.27 11.24-11.27 17.87-11.27m0-4c-16.55 0-29.97 19.93-29.97 44.51s13.42 44.51 29.97 44.51S123.81 88.58 123.81 64s-13.42-44.51-29.97-44.51z" fill="#b0bec5"></path>
                        <linearGradient id="IconifyId17ecdb2904d178eab7947" gradientUnits="userSpaceOnUse" x1="82.209" y1="46.676" x2="82.209" y2="82.083"> <stop offset="0" stop-color="#424242"> </stop> <stop offset="1" stop-color="#212121"> </stop></linearGradient>
                        <path d="M85.31 59.84c-2.7-2.54-2.1-7.58 1.36-11.26c.18-.19.36-.37.55-.54c-1.54-.87-3.23-1.36-5.01-1.36c-7.19 0-13.02 7.93-13.02 17.7s5.83 17.7 13.02 17.7c7.19 0 13.02-7.93 13.02-17.7c0-1.75-.19-3.45-.54-5.05c-3.23 2.33-7.11 2.64-9.38.51z" fill="url(#IconifyId17ecdb2904d178eab7947)"></path>
                      </g>
                    </g>
                  </svg>
                  覗いてみる
                </a>
              </div>

              <div className="flex justify-center">
                <div className="mt-20 backdrop-blur-sm bg-white/20 rounded-md p-6 text-left w-fit">
                  <h2 className="text-gray-100 text-2xl font-semibold mb-3">コンセプト</h2>
                  <p className="text-gray-100">● 飾らなくていい、不正解なんてない。そのままの自分を表現しよう！</p>
                  <p className="text-gray-100">● そんな投稿にぬくもりのあるリアクションを！</p>
                  <p className="text-gray-100">● 「ここにくればみんなが迎えてくれる」そんな場に！</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-5">
                <div className="grow md:flex-none text-center">
                  <Image src={mogePic} className="rounded-full max-w-xs" alt="もげもげ" width={200} height={200} />
                </div>
                <div className="flex-1 min-w-full md:min-w-0 text-left">
                  <p className="text-gray-400">ChatGPTを用いたBot</p>
                  <p className="text-white text-2xl">もげもげ</p>
                  <p className="mt-8 text-white">
                    このサーバーにはChatGPTを用いた、自動投稿Botがいます。
                    1日1回程度、ランダムな時間につぶやくので、楽しみにしてください。
                    いたずらが好きなおばけだよ。
                  </p>
                  <div className="mt-4 text-gray-300">
                    <li>
                      @mogemogeとメンションを付けると反応してくれることがあります。
                    </li>
                    <li>
                      ChatGPTの特性上、間違った情報を言う可能性があります。ご了承ください。
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
            <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".8" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ff8480" />
                  <stop offset="1" stopColor="#f56302" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
