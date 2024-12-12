"use client";
import dynamic from "next/dynamic";
import useAppStore from "../app.store";
import PDFUpLoad from "./PDFUpLoad";

const PDFViewer = dynamic(() => import("./PDFViewer"),{ ssr: false })

const PDFContent = () => {
  const file = useAppStore((state) => state.file);

  return file ? <PDFViewer /> : <PDFUpLoad />;
};

export default PDFContent;
