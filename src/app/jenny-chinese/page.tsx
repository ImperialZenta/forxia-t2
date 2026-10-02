import type { Metadata } from "next";
import Image from "next/image";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import {
  burnabyNorthMapImagePath,
  jennyChineseQrImagePath,
  jennyHeadshotImagePath,
  jennyNominationFormUrl,
} from "@/lib/jenny-campaign";

export const metadata: Metadata = {
  title: {
    absolute: "Jenny Yamagata 提名",
  },
  description: "Jenny Yamagata 争取在卑诗省省选本拿比北选区登上选票。",
  robots: { index: false },
  openGraph: {
    title: "Jenny Yamagata 提名",
    description: "Jenny Yamagata 争取在卑诗省省选本拿比北选区登上选票。",
  },
};

export default function JennyChineseNominationPage() {
  return (
    <div className="font-cjk flex min-h-screen flex-col">
      <SetHtmlLang lang="zh-Hans" />
      <header className="bg-navy-950 px-4 py-10 text-white sm:py-14">
        <div className="container-page max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            卑诗省省选
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Jenny Yamagata 提名
          </h1>
        </div>
      </header>

      <article className="section-padding flex-1">
        <div className="container-page max-w-2xl space-y-6 text-navy-700 leading-relaxed">
          <div className="flex justify-center">
            <a
              href={jennyNominationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              打开提名表
            </a>
          </div>

          <div className="flex justify-center">
            <Image
              src={jennyHeadshotImagePath}
              alt="Jenny Yamagata，本拿比北选区 OneBC 候选人"
              width={1024}
              height={1024}
              className="h-auto w-1/2 rounded-lg border border-navy-200 shadow-sm"
              priority
            />
          </div>

          <p className="text-lg text-navy-800">
            您好，我是
            <strong className="font-semibold text-navy-900">Jenny Yamagata</strong>。
          </p>

          <div className="flex justify-center">
            <a
              href={jennyNominationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              打开提名表
            </a>
          </div>

          <figure className="pt-2">
            <Image
              src={burnabyNorthMapImagePath}
              alt="本拿比北选区地图"
              width={813}
              height={1024}
              className="h-auto w-full max-w-xl rounded-lg border border-navy-200 shadow-sm"
            />
            <figcaption className="mt-2 text-center text-sm text-navy-500">
              本拿比北选区
            </figcaption>
          </figure>
        </div>
      </article>

      <footer className="border-t border-navy-200 bg-white py-8 text-center">
        <div className="container-page max-w-2xl flex flex-col items-center gap-4">
          <p className="text-sm text-navy-500">Jenny Yamagata — 本拿比北</p>
          <Image
            src={jennyChineseQrImagePath}
            alt="指向 https://www.forxia.com/jenny-chinese 的二维码"
            width={256}
            height={256}
            className="mt-2 h-56 w-56 sm:h-64 sm:w-64"
          />
          <p className="text-sm text-navy-500">
            This is unpaid personal expression provided by Andrew Rose
          </p>
        </div>
      </footer>
    </div>
  );
}
