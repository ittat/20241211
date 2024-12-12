import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFContent from "@/components/PDFContent";
import getIntl from "../i18n/server";
import ServerIntlProvider from "../i18n/client";
import { PageProps } from "@/.next/types/app/layout";

async function Home(props: { params: { locale: string } } & PageProps) {
  const intl = await getIntl(props.params.locale);

  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <Header />
      <div className="bg-[#f7f5ee] text-black">
        <div className="container mx-auto py-20 space-y-5 ">
          <div className="flex flex-col text-center !mb-10 space-y-5">
            <h1 className="text-5xl font-serif">
              {intl.formatMessage({ id: "Rotate PDF Pages" })}
            </h1>
            <p className="mt-2 text-gray-600 max-w-lg mx-auto">
              {intl.formatMessage({
                id: "Simply click on a page to rotate it. You can then download your modified PDF.",
              })}
            </p>
          </div>

          <div className="flex justify-center ">
            <PDFContent />
          </div>
        </div>
      </div>

      <Footer intl={intl} />
    </ServerIntlProvider>
  );
}

export default Home;
