import type { Metadata } from "next";
import Image from "next/image";
import {
  burnabyNorthMapImagePath,
  jennyHeadshotImagePath,
  jennyNominationFormUrl,
  jennyNominationQrImagePath,
} from "@/lib/jenny-campaign";

export const metadata: Metadata = {
  title: "Nomination — Jenny Yamagata",
  description:
    "Ballot access for Jenny Yamagata in Burnaby North — BC provincial election.",
  robots: { index: false },
};

export default function JennyNominationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-navy-950 px-4 py-10 text-white sm:py-14">
        <div className="container-page max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            British Columbia provincial election
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Jenny Yamagata Nomination
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
              Open nomination form
            </a>
          </div>

          <div className="flex justify-center">
            <Image
              src={jennyHeadshotImagePath}
              alt="Jenny Yamagata, OneBC candidate for Burnaby North"
              width={1024}
              height={1024}
              className="h-auto w-1/2 rounded-lg border border-navy-200 shadow-sm"
              priority
            />
          </div>

          <p className="text-lg text-navy-800">
            Hello, I&apos;m{" "}
            <strong className="font-semibold text-navy-900">Jenny Yamagata</strong>.
          </p>

          <div className="flex justify-center">
            <a
              href={jennyNominationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Open nomination form
            </a>
          </div>

          <figure className="pt-2">
            <Image
              src={burnabyNorthMapImagePath}
              alt="Map of the Burnaby North electoral district"
              width={813}
              height={1024}
              className="h-auto w-full max-w-xl rounded-lg border border-navy-200 shadow-sm"
            />
            <figcaption className="mt-2 text-center text-sm text-navy-500">
              Burnaby North electoral district
            </figcaption>
          </figure>
        </div>
      </article>

      <footer className="border-t border-navy-200 bg-white py-8 text-center">
        <div className="container-page max-w-2xl flex flex-col items-center gap-4">
          <p className="text-sm text-navy-500">Jenny Yamagata — Burnaby North</p>
          <Image
            src={jennyNominationQrImagePath}
            alt="QR code linking to the nomination form"
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
