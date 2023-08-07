const puppeteer = require("puppeteer");
const { writeFile } = require("node:fs/promises");
const path = require("path");

const getPdfPath = () => path.resolve("public", "michael-pacheco-resume.pdf");

/**
 * @param page {puppeteer.Page}
 */
const hideDownloadButton = (page) =>
  page.evaluate(() => {
    const exportButton = document.querySelector("#btn-export-pdf");
    exportButton.style.visibility = "hidden";
  });
const exportAsPDF = async () => {
  const url = `http://localhost:3000`;
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle0" });
    await hideDownloadButton(page);

    const fileBuffer = await page.pdf({
      format: "a4",
      printBackground: true,
      landscape: true,
    });

    return writeFile(getPdfPath(), fileBuffer);
  } catch (error) {
    throw error;
  } finally {
    await browser.close();
  }
};

(async () => {
  exportAsPDF()
    .then(() => console.log("✅ PDF exported successfully"))
    .catch((error) => console.error("Failed to export PDF", error));
})();
