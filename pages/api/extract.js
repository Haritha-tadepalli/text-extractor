import ExtractService from "../../services/ExtractService";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { extractedText } = req.body;
  
      if (!extractedText) {
        return res.status(400).json({ error: 'Missing file data' });
      }
      
      const extractService = new ExtractService();
      // Perform additional processing using OpenAI
      const enrichedData = await extractService.extractProcessAndEnrichText(extractedText);
      
      console.log(enrichedData);
      return res.status(200).json({ enrichedData });
    } catch (error) {
      console.error('Error extracting text:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

}