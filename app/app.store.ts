import { degrees, PDFDocument } from "pdf-lib";
import { PDFDocumentProxy } from "pdfjs-dist";
import { create } from "zustand";

interface IAppStore {
  file: File | null;
  pages: number;
  rotates: number[];
  rotate: (pageNum: number) => number;
  width: number; // 100-500
  scale: number; // 0-1
  doc: PDFDocumentProxy | null;
  loading: boolean;
  zoomIn: () => void;
  zoomOut: () => void;
  rotateAll: () => void;
  rotateOne: (pageIdx: number) => void;
  canZoomIn: () => boolean;
  canZommOut: () => boolean;
  setFile: (file: File) => void;
  clearFile: () => void;
  onDocumentLoadSuccess: (doc: PDFDocumentProxy) => void;
  onDownload: () => void;
}

const useAppStore = create<IAppStore>((set, get) => ({
  file: null,
  doc: null,
  pages: 0,
  rotates: [],
  width: 300,
  scale: 1,
  loading: false,
  canZoomIn: () => get().width < 500,
  canZommOut: () => get().width > 100,
  zoomIn: () => set((state) => ({ width: state.width + 20 })),
  zoomOut: () => set((state) => ({ width: state.width - 20 })),
  rotateAll: () => {
    const { rotates, rotateOne } = get();
    rotates.forEach((_, idx) => {
      rotateOne(idx + 1);
    });
  },
  rotate: (pageNum) => get().rotates[pageNum - 1],
  rotateOne: (pagNum) => {
    const { rotates } = get();
    const pageIdx = pagNum - 1;
    rotates[pageIdx] = (rotates[pageIdx] + 90) % 360;
    set((state) => ({ rotates: [...state.rotates] }));
  },
  setFile: (file) => set({ file, loading: true }),
  clearFile: () =>
    set({
      file: null,
      rotates: [],
      width: 300,
      scale: 1,
      doc: null,
      loading: false,
    }),
  onDownload: async () => {
    const { doc, rotates: pageRotateList } = get();
    if (!doc) return;

    let pdfBytes = await doc.saveDocument();
    const pdf = await PDFDocument.load(pdfBytes),
      pageCount = pdf.getPageCount();
    for (let pageNum = 0; pageNum < pageCount; pageNum++) {
      pdf.getPage(pageNum).setRotation(degrees(pageRotateList[pageNum]));
    }
    pdfBytes = await pdf.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = get().file!.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  onDocumentLoadSuccess: (doc: PDFDocumentProxy) => {
    set(() => ({
      pages: doc.numPages,
      rotates: new Array(doc.numPages).fill(0),
      doc: doc,
      // loading: false,
    }));
    setTimeout(()=>set({loading: false}), 2000);
  },
}));

export default useAppStore;
