import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

const extractTextFromPDF = async (file) => {
  try {
    const pdfData = new Uint8Array(await file.arrayBuffer());
    const pdf = await getDocument(pdfData).promise;

    let extractedText = '';

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      extractedText += pageText + ' ';
    }
      
    console.log(extractedText.trim());

    return extractedText.trim();
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw new Error('Error extracting text from PDF. Please try again.');
  }
};

export { extractTextFromPDF };