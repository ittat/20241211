"use client";
import useAppStore from "../app.store";
import PDFUpLoad from "./PDFUpLoad";
import PDFViewer from "./PDFViewer";

const PDFContent = () => {
  const file = useAppStore((state) => state.file);

  return file ? <PDFViewer /> : <PDFUpLoad />;
};

export default PDFContent;
