import Header from "./components/Header";
import Footer from "./components/Footer";
import PDFContent from "./components/PDFContent";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Free PDF Page Rotator - Rotate Individual or All Pages</title>
        <meta
          name="description"
          content="Rotate individual or all pages in your PDF effortlessly. No downloads or sign-ups. Fast, secure, and user-friendly. Try now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="PDF, Rotate PDF, PDF Tool, PDF Rotation, Online PDF Rotator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://pdf.ai/" />
        <meta
          property="og:title"
          content="Free PDF Page Rotator - Rotate Individual or All Pages"
        />
        <meta
          property="og:description"
          content="Rotate individual or all pages in your PDF effortlessly. No downloads or sign-ups. Fast, secure, and user-friendly. Try now!"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/4738d269-b536-45f2-57e1-fe07fef90d00/public"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PDFdotai" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Free PDF Page Rotator - Rotate Individual or All Pages",
            "description": "Rotate individual or all pages in your PDF effortlessly. No downloads or sign-ups. Fast, secure, and user-friendly. Try now!",
            "url": "http://pdf.ai/",
            "image": "https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/4738d269-b536-45f2-57e1-fe07fef90d00/public",
            "author": {
              "@type": "Person",
              "name": "PDFdotai"
            }
          }
          `}
        </script>

        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <div className="bg-[#f7f5ee] text-black">
        <div className="container mx-auto py-20 space-y-5 ">
          <div className="flex flex-col text-center !mb-10 space-y-5">
            <h1 className="text-5xl font-serif">Rotate PDF Pages</h1>
            <p className="mt-2 text-gray-600 max-w-lg mx-auto">
              Simply click on a page to rotate it. You can then download your
              modified PDF.
            </p>
          </div>

          <div className="flex justify-center ">
            <PDFContent />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
