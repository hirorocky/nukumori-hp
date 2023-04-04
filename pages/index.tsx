import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

export default function Home()
{
  return (
    <>
      <Header title="ぬくもりげいすきー" />

      <main className="bg-gray-800 min-h-[90vh]">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  このサーバは皆様の寄付で運営しております。 <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>寄付をする <span aria-hidden="true">&rarr;</span></a>
                </div>
              </div> */}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">ぬくもりげいすきー</h1>
              <p className="mt-6 text-base leading-8 text-gray-400">
                こちらは、ゲイの方が利用されることを想定した、分散型SNS Misskeyのサーバーです。
              </p>
              <p className="text-base leading-8 text-gray-400">
                日常の中に、ぬくもりのあるコミュニケーションを、もうひとつ築いてみませんか。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://mi.nukumori-gay.space" className="inline-flex rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                  <svg className="stroke-1 hover:stroke-2 w-5 h-5 mr-2" aria-hidden="true" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  覗いてみる
                </a>

                <Link href="/misskey/concept">
                  <a className="text-sm font-semibold leading-6 text-gray-100">
                    コンセプト <span aria-hidden="true">→</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
            <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ff8480" />
                  <stop offset="1" stop-color="#f56302" />
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
