import { Page, Thumbnail } from "react-pdf";
import { RotateSVG } from "./Svg";
import { useCallback, useEffect, useState } from "react";
import useAppStore from "../app.store";
import React from "react";

const PDFPage = (props: { pageNumber: number; width?: number }) => {
  const { pageNumber } = props;
  const cavasRef = React.useRef<HTMLCanvasElement>(null);
  const width = useAppStore((state) => state.width);
  const rotate = useAppStore((state) => state.rotate(pageNumber));

  const onRotateBtnClick = useCallback(() => {
    useAppStore.getState().rotateOne(pageNumber);
  }, []);


  useEffect(() => {
    if (cavasRef.current) {
      cavasRef.current.style.transform = `rotate(${rotate}deg)`;
    }
  }, [rotate]);

  return (
    <div
      className="m-3 cursor-pointer relative max-w-[500px] min-w-[100px] overflow-hidden"
      style={{ width: `${width}px` }}
      onClick={onRotateBtnClick}
    >
      <div className="absolute z-10 top-1 right-1 rounded-full p-1 hover:scale-105 hover:fill-white bg-[#ff612f] fill-white cursor-pointer">
        <RotateSVG />
      </div>
      <Page
        pageNumber={pageNumber}
        className={"pdf-page"}
        width={595}
        // width={width}
        // rotate={rotate}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        
        canvasRef={cavasRef}
      >
        <div className="w-[100%]  text-center shrink-0 text-xs italic overflow-hidden text-ellipsis whitespace-nowrap">
          {pageNumber}
        </div>
      </Page>
    </div>
  );
};

export default React.memo(PDFPage);
