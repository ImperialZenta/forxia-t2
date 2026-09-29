import type { Metadata } from "next";
import Image from "next/image";
import {
  bnsMapImagePath,
  campaignEmail,
  nominationFormUrl,
} from "@/lib/candidate-campaign";

export const metadata: Metadata = {
  title: "Nomination — Andrew Rose",
  description:
    "Ballot access for Andrew Rose in Burnaby South–Metrotown — BC provincial election.",
  robots: { index: false },
};

export default function NominationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-navy-950 px-4 py-10 text-white sm:py-14">
        <div className="container-page max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            British Columbia provincial election
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Nomination</h1>
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
              Open nomination form
            </a>
          </div>

          <p className="text-lg text-navy-800">
            Hello, I&apos;m <strong className="font-semibold text-navy-900">Andrew Rose</strong>.
            I&apos;m seeking to run in the{" "}
            <strong className="font-semibold text-navy-900">BC provincial election</strong>. I
            need{" "}
            <strong className="font-semibold text-navy-900">nomination signatures</strong> to get
            on the ballot, as required by{" "}
            <strong className="font-semibold text-navy-900">Elections BC</strong>. This is our
            democratic process, and I am going to follow it so I can raise concerns that should
            be debated provincially, not brushed aside.
          </p>

          <p>
            I&apos;m concerned about how the current government is{" "}
            <strong className="font-semibold text-navy-900">changing the rules</strong> around
            home and land ownership. Land titles are being mixed up so that people no longer
            have <strong className="font-semibold text-navy-900">clear, full ownership</strong> of
            their own property. That kind of ownership is one of the{" "}
            <strong className="font-semibold text-navy-900">
              basics of a free and successful society.
            </strong>{" "}
            When it gets weaker, families and communities pay the price.
          </p>

          <p>
            Closer to home, I&apos;m seeing{" "}
            <strong className="font-semibold text-navy-900">
              changes in funding and priorities
            </strong>{" "}
            at the school my <strong className="font-semibold text-navy-900">son and daughter</strong>{" "}
            attend. I want those issues discussed openly.
          </p>

          <p>
            I&apos;m looking for{" "}
            <strong className="font-semibold text-navy-900">ballot access</strong> in the{" "}
            <strong className="font-semibold text-navy-900">upcoming provincial election</strong>{" "}
            in <strong className="font-semibold text-navy-900">Burnaby South–Metrotown</strong> so
            I can speak to these risks on the record and give voters a choice on the provincial
            ballot when other parties seem to be ignoring them.
          </p>

          <p className="text-navy-800">
            If you live in this riding and support ballot access, please complete the nomination
            form below.
          </p>

          <div className="space-y-3">
            <div className="flex justify-center">
              <a
                href={nominationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Open nomination form
              </a>
            </div>
            <p className="text-sm text-navy-600">
              If you have problems with the nomination form, email me at{" "}
              <a
                href={`mailto:${campaignEmail}`}
                className="font-medium text-brand-700 hover:text-brand-800 underline-offset-2 hover:underline"
              >
                {campaignEmail}
              </a>
              .
            </p>
          </div>

          <figure className="pt-2">
            <Image
              src={bnsMapImagePath}
              alt="Map of the Burnaby South–Metrotown electoral district"
              width={1200}
              height={900}
              className="w-full max-w-xl rounded-lg border border-navy-200 shadow-sm"
            />
            <figcaption className="mt-2 text-center text-sm text-navy-500">
              Burnaby South–Metrotown electoral district
            </figcaption>
          </figure>
        </div>
      </article>

      <footer className="border-t border-navy-200 bg-white py-6 text-center text-sm text-navy-500">
        <p>Andrew Rose — Burnaby South–Metrotown</p>
      </footer>
    </div>
  );
}
