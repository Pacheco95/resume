"use client";

import { BiPrinter } from "react-icons/bi";

const isGoogleChrome = () => navigator.userAgent.includes("Chrome");

const PrintButton = () =>
  isGoogleChrome() ? (
    <button
      className="fixed right-4 md:right-8 bottom-4 md:bottom-8 p-2 md:p-4 text-lg md:text-2xl rounded-full bg-primary text-white hover:brightness-150 shadow-md z-10 shadow-gray-500"
      onClick={print}
    >
      <BiPrinter aria-description="Print Resume" />
    </button>
  ) : null;

export default PrintButton;
