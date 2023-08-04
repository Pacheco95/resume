"use client";

import { BiDownload } from "react-icons/bi";
import { useEffect, useState } from "react";
import FileSaver from "file-saver";
import { cn } from "@/classnames";
import { ImSpinner9 } from "react-icons/im";

const isGoogleChrome = () => navigator.userAgent.includes("Chrome");

const DownloadButton = () => {
  const [isChrome, setIsChrome] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsChrome(isGoogleChrome);
  }, []);

  const handleDownloadClick = async () => {
    setLoading(true);

    try {
      const response = await fetch(window.location.origin + "/api/download");
      const blob = await response!.blob();
      FileSaver.saveAs(blob, "michael-pacheco-resume.pdf");
    } finally {
      setLoading(false);
    }
  };

  const Icon = loading ? ImSpinner9 : BiDownload;

  const title = `${loading ? "Downloading" : "Download"} resume`;

  return isChrome ? (
    <button
      className="fixed right-4 md:right-8 bottom-4 md:bottom-8 p-2 md:p-4 text-lg md:text-2xl rounded-full bg-primary text-white hover:brightness-150 shadow-md z-10 shadow-gray-500"
      onClick={handleDownloadClick}
      title={title}
    >
      <Icon
        aria-description={title}
        className={cn({ "animate-spin": loading })}
      />
    </button>
  ) : null;
};

export default DownloadButton;
