import type { Metadata } from "next";
import Image from "next/image";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import {
  bnsMapImagePath,
  campaignEmail,
  nominationFormUrl,
} from "@/lib/candidate-campaign";

export const metadata: Metadata = {
  title: {
    absolute: "候选人提名 — Andrew Rose",
  },
  description: "Andrew Rose 争取在卑诗省省选本拿比南-铁道镇选区登上选票。",
  robots: { index: false },
  openGraph: {
    title: "候选人提名 — Andrew Rose",
    description: "Andrew Rose 争取在卑诗省省选本拿比南-铁道镇选区登上选票。",
  },
};

export default function ChineseNominationPage() {
  return (
    <div className="font-cjk flex min-h-screen flex-col">
      <SetHtmlLang lang="zh-Hans" />
      <header className="bg-navy-950 px-4 py-10 text-white sm:py-14">
        <div className="container-page max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            卑诗省省选
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">候选人提名</h1>
        </div>
      </header>

      <article className="section-padding flex-1">
        <div className="container-page max-w-2xl space-y-6 text-navy-700 leading-relaxed">
          <div className="flex justify-center">
            <a
              href={nominationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              打开提名表
            </a>
          </div>

          <p className="text-lg text-navy-800">
            您好，我是<strong className="font-semibold text-navy-900">Andrew Rose</strong>。我计划参选<strong className="font-semibold text-navy-900">卑诗省省选</strong>。按照<strong className="font-semibold text-navy-900">卑诗省选举局（Elections BC）</strong>的规定，我需要征集<strong className="font-semibold text-navy-900">提名签名</strong>，才能登上选票。这是我们的民主程序，我会依照这一程序行事，以便把一些应当在省级层面公开辩论、而不应被置之不理的问题提出来。
          </p>

          <p>
            我担心现任政府正在<strong className="font-semibold text-navy-900">改变有关房屋和土地所有权的规则</strong>。土地产权变得混淆不清，以致人们对自己的物业不再拥有<strong className="font-semibold text-navy-900">清晰、完整的所有权</strong>。这种所有权是<strong className="font-semibold text-navy-900">自由、繁荣社会的基石之一</strong>。一旦它遭到削弱，家庭和社区都将为此付出代价。
          </p>

          <p>
            就我自己的家庭而言，我注意到我的<strong className="font-semibold text-navy-900">儿子和女儿</strong>就读的学校，在<strong className="font-semibold text-navy-900">经费和办学重点上正在发生变化</strong>。我希望这些问题能得到公开讨论。
          </p>

          <p>
            我希望在<strong className="font-semibold text-navy-900">即将举行的省选</strong>中，在<strong className="font-semibold text-navy-900">本拿比南-铁道镇（Burnaby South–Metrotown）</strong>选区<strong className="font-semibold text-navy-900">登上选票</strong>，从而能公开、正式地就这些风险表明立场；在其他政党似乎忽视这些问题的情况下，也让选民在省级选票上多一个选择。
          </p>

          <p className="text-navy-800">
            如果您居住在本选区，并支持我登上选票，请填写下方的提名表。
          </p>

          <div className="space-y-3">
            <div className="flex justify-center">
              <a
                href={nominationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                打开提名表
              </a>
            </div>
            <p className="text-sm text-navy-600">
              如果您在填写提名表时遇到问题，请发邮件给我：<a
                href={`mailto:${campaignEmail}`}
                className="font-medium text-brand-700 hover:text-brand-800 underline-offset-2 hover:underline"
              >{campaignEmail}</a>。
            </p>
          </div>

          <figure className="pt-2">
            <Image
              src={bnsMapImagePath}
              alt="本拿比南-铁道镇选区地图"
              width={1200}
              height={900}
              className="w-full max-w-xl rounded-lg border border-navy-200 shadow-sm"
            />
            <figcaption className="mt-2 text-center text-sm text-navy-500">
              本拿比南-铁道镇选区
            </figcaption>
          </figure>
        </div>
      </article>

      <footer className="border-t border-navy-200 bg-white py-8 text-center">
        <div className="container-page max-w-2xl flex flex-col items-center gap-4">
          <p className="text-sm text-navy-500">Andrew Rose — 本拿比南-铁道镇</p>
          <Image
            src="/chinese-page-qr.png"
            alt="指向 https://www.forxia.com/chinese 的二维码"
            width={256}
            height={256}
            className="mt-2 h-56 w-56 sm:h-64 sm:w-64"
          />
        </div>
      </footer>
    </div>
  );
}
