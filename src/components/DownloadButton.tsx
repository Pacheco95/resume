"use client";

import { BiDownload } from "react-icons/bi";
import { cn } from "@/classnames";

const DownloadButton = () => (
  <a
    id="btn-export-pdf"
    href="/michael-pacheco-resume.pdf"
    target="_blank"
    className={cn(
      "fixed rounded-full bg-primary text-white shadow-md z-10 shadow-gray-500",
      "right-4 md:right-8",
      "bottom-4 md:bottom-8",
      "p-2 md:p-4",
      "text-lg md:text-2xl",
      "hover:brightness-150",
      "transition-all",
    )}
  >
    <BiDownload aria-description="Download resume as PDF" />
  </a>
);

export default DownloadButton;
