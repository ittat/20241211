import Link from "next/link";
import { InstagramSvg, TikTokSvg, TwitterSVG, YouTubeSVG } from "./Svg";
// import {  useIntl } from "react-intl";
import { IntlShape } from "@formatjs/intl";

function Footer(props: { intl: IntlShape }) {
  const { intl } = props;

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 mt-8 sm:mt-12 lg:px-8 lg:mt-16 border-t border-gray-900/10 pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-7" src="/favicon.ico" alt="PDF.ai logo" />
            <div className="text-sm leading-6 text-gray-600">
              {intl.formatMessage({
                id: "Chat with any PDF: ask questions, get summaries, find information, and more.",
              })}
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.tiktok.com/@pdfai"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
              >
                <span className="sr-only">
                  {intl.formatMessage({ id: "TikTok" })}
                </span>
                <TikTokSvg />
              </a>
              <a
                href="https://www.instagram.com/pdfdotai/"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
              >
                <span className="sr-only">
                  {intl.formatMessage({ id: "Instagram" })}
                </span>
                <InstagramSvg />
              </a>
              <a
                href="https://twitter.com/pdfdotai"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
              >
                <span className="sr-only">
                  {intl.formatMessage({ id: "Twitter" })}
                </span>
                <TwitterSVG />
              </a>
              <a
                href="https://www.youtube.com/@pdfai"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
              >
                <span className="sr-only">
                  {intl.formatMessage({ id: "YouTube" })}
                </span>
                <YouTubeSVG />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                   {intl.formatMessage({ id: "Products"})}
                </h3>
                <ul role="list" className="mt-6 space-y-4 list-none p-0">
                  <li className="p-0 m-0">
                    <Link
                      href="/use-cases"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Use cases" })}
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      href="/chrome-extension"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Chrome extension" })}
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="https://api.pdf.ai/"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "API docs" })}
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      href="/pricing"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Pricing" })}
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      href="/tutorials"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Video tutorials" })}
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      href="/resources"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Resources" })}
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      href="/blog"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Blog" })}
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      href="/faq"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "FAQ" })}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {intl.formatMessage({ id: "We also built" })}
                </h3>
                <ul role="list" className="mt-6 space-y-4 list-none p-0">
                  <li className="p-0 m-0">
                    <a
                      href="https://pdf.ai/tools/resume-ai-scanner"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Resume AI Scanner" })}
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="https://pdf.ai/tools/invoice-ai-scanner"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Invoice AI Scanner" })}
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="https://pdf.ai/tools/quiz-ai-generator"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "AI Quiz Generator" })}
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="https://quickyai.com"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "QuickyAI" })}
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="https://docsium.com"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Docsium" })}
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="https://pdf.ai/gpts"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "PDF GPTs" })}
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="https://pdfgen.com"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "PDF AI generator" })}
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="https://pdf.ai/tools"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Other PDF tools" })}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {intl.formatMessage({ id: "Company" })}
                </h3>
                <ul role="list" className="mt-6 space-y-4 list-none p-0">
                  <li className="p-0 m-0">
                    <Link
                      href="/compare/chatpdf-alternative"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "PDF.ai vs ChatPDF" })}
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      href="/compare/adobe-acrobat-reader-alternative"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "PDF.ai vs Acrobat Reader" })}
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      href="/privacy-policy"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Legal" })}
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      href="/affiliate-program"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Affiliate program 💵" })}
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      href="/investor"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "Investor" })}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
