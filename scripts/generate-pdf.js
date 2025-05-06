const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    // Create the directory if it doesn't exist
    const dir = path.join(__dirname, '../public');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Launch a headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Load the HTML file
    const htmlPath = path.join(__dirname, '../public/resume.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

    // Generate PDF
    const pdfPath = path.join(__dirname, '../public/resume.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });

    console.log(`PDF generated successfully at: ${pdfPath}`);

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
})();
