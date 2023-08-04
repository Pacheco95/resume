import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const saveAsPdf = async (url: string) => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  const result = await page.pdf({
    format: "a4",
    printBackground: true,
    landscape: true,
  });

  await browser.close();

  return result;
};

const handleDownloadRequest: NextApiHandler = async (req, res) => {
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="michael-pacheco-resume.pdf"`,
  );
  res.setHeader("Content-Type", "application/pdf");

  const pdf = await saveAsPdf("https://michael-pacheco.vercel.app");

  res.send(pdf);
};

export default handleDownloadRequest;
