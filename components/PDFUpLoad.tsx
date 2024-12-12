"use client";

import { ChangeEvent } from "react";
import useAppStore from "@/app/app.store";
import { UpdloadSVG } from "./Svg";
import { useIntl } from "react-intl";

const PDFUpLoad = () => {
  const intl = useIntl();
  
  
  const setFile = useAppStore((state) => state.setFile);

  // 处理上传的pdf
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    const file = files?.[0];

    if (file) {
      setFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (file) {
      setFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className="h-[350px] relative text-center w-[275px]"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        className="cursor-pointer hidden"
        type="file"
        id="input-file-upload"
        accept=".pdf"
        onChange={onInputChange}
      />
      <label
        className="h-full flex items-center justify-center border rounded transition-all bg-white border-dashed border-stone-300"
        htmlFor="input-file-upload"
      >
        <div className="cursor-pointer flex flex-col items-center space-y-3">
          <UpdloadSVG />
          <p className="pointer-events-none font-medium text-sm leading-6 pointer opacity-75">
            {intl.formatMessage({ id: "Click to upload or drag and drop" })}
          </p>
        </div>
      </label>
    </div>
  );
};

export default PDFUpLoad;
