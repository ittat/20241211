"use client";

import { pdfjs, Document } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
import PDFPage from "./PDFPage";
import { ZoomInSVG, ZoomOutSVG } from "./Svg";
import useAppStore from "../app.store";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

function PDFViewer() {
  const loading = useAppStore((state) => state.loading);
  const file = useAppStore((state) => state.file);
  const pages = useAppStore((state) => state.pages);
  const doRotateAll = useAppStore((state) => state.rotateAll);
  const doZoomIn = useAppStore((state) => state.zoomIn);
  const doZoomOut = useAppStore((state) => state.zoomOut);
  const canZommOut = useAppStore((state) => state.canZommOut());
  const canZoomIn = useAppStore((state) => state.canZoomIn());
  const clearFile = useAppStore((state) => state.clearFile);

  const onDocumentLoadSuccess = useAppStore(
    (state) => state.onDocumentLoadSuccess
  );

  const onDownloadBtnClick = async () => {
    if (!file) return;
    useAppStore.getState().onDownload();
  };

  return (
    <div className="pdf_container_document mx-auto">
      {loading ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : null}

      {!loading ? (
        <div className="flex justify-center items-center space-x-3 selecto-ignore w-[350px] m-auto">
          <button className="btn-primary" onClick={doRotateAll}>
            Rotate all
          </button>
          <button
            className="btn-secondary tooltip"
            data-tip="Remove this PDF and select a new one"
            onClick={clearFile}
          >
            Remove PDF
          </button>

          <button
            className="tooltip bg-[#ff612f] shadow rounded-full p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
            data-tip="Zoom in"
            onClick={doZoomIn}
            disabled={!canZoomIn}
          >
            <ZoomInSVG />
          </button>
          <button
            className="tooltip bg-[#ff612f] shadow rounded-full p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
            data-tip="Zoom out"
            onClick={doZoomOut}
            disabled={!canZommOut}
          >
            <ZoomOutSVG />
          </button>
        </div>
      ) : null}

      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className={loading ? "hidden" : ""}
        options={options}
        loading={ <span className="loading loading-spinner loading-sm"></span>}
      >
        <div className="flex flex-wrap justify-center">
          {Array.from(new Array(pages), (_el, index) => (
            <PDFPage
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ))}
        </div>
      </Document>

      {/* 下载按钮 */}
      {!loading ? (
        <div className="flex flex-col justify-center items-center space-y-3 selecto-ignore  w-[100px] m-auto">
          <button
            className="btn-primary tooltip"
            data-tip="Split and download PDF"
            onClick={onDownloadBtnClick}
          >
            Download
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default PDFViewer;
