import type { Metadata } from "next";
import Image from "next/image";

const NOMINATION_FORM_URL =
  "https://na5.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCtMd1Dp_wzf5jDKs-dmc_J6mwxMLvyC6_AEeBLcuF6rKage3odcZagQc55k01oSsg";

const SUPPORT_EMAIL = "andrew@forxia.com";

const ONEBC_PRIORITIES_URL = "https://1bc.ca/priorities";
const ONEBC_DONATE_URL = "https://action.1bc.ca/donate";

export const metadata: Metadata = {
  title: "Nomination signatures — Andrew Rose",
  description:
    "Support ballot access for Andrew Rose, OneBC candidate in Burnaby South–Metrotown.",
  robots: { index: false },
};

export default function CandidatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-navy-950 px-4 py-10 text-white sm:py-14">
        <div className="container-page max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            British Columbia provincial election
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Nomination signatures
          </h1>
        </div>
      </header>

      <article className="section-padding flex-1">
        <div className="container-page max-w-2xl space-y-6 text-navy-700 leading-relaxed">
          <p className="text-lg text-navy-800">
            Hello, my name is <strong className="font-semibold text-navy-900">Andrew Rose</strong>.
            I am seeking to run as a candidate for{" "}
            <strong className="font-semibold text-navy-900">OneBC</strong> in British Columbia.
          </p>

          <p>
            What motivated me to start this journey is the increasing risk to our land titles,
            and the rise in identity politics—primarily targeted at young children in their
            early years.
          </p>

          <p>
            To help me out, I need signatures for ballot access in the riding of{" "}
            <strong className="font-semibold text-navy-900">Burnaby South–Metrotown</strong>.
            On this page you&apos;ll find a link to an electronic form that can be filled out.
            Please complete the form and email it to me at the address below. That would be
            much appreciated. Please also pass it on to anyone else in the riding who may be
            willing to support ballot access.
          </p>

          <div className="card space-y-4">
            <h2 className="text-lg font-semibold text-navy-900">Electronic nomination form</h2>
            <p className="text-sm text-navy-600">
              Open the form in a new window, fill it out, and follow the instructions to save
              or download your completed copy.
            </p>
            <a
              href={NOMINATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Open nomination form
            </a>
          </div>

          <div className="card space-y-2">
            <h2 className="text-lg font-semibold text-navy-900">When you&apos;re done</h2>
            <p className="text-sm text-navy-600">
              Email your completed form to:
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-lg font-semibold text-brand-700 hover:text-brand-800 underline-offset-2 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

          <p className="text-navy-800">Thank you for your support.</p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={ONEBC_PRIORITIES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              OneBC priorities
            </a>
            <a
              href={ONEBC_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              Donate to OneBC
            </a>
          </div>
        </div>
      </article>

      <footer className="border-t border-navy-200 bg-white py-8 text-center">
        <div className="container-page max-w-2xl flex flex-col items-center gap-4">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-gold-400/70 shadow-lg sm:h-44 sm:w-44">
            <Image
              src="/andrew-portrait.png"
              alt="Portrait of Andrew Rose"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="object-cover object-[center_18%]"
            />
          </div>
          <p className="text-sm text-navy-500">Andrew Rose — Burnaby South–Metrotown</p>
        </div>
      </footer>
    </div>
  );
}
