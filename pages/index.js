import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from '../components/FileUpload';
import { extractTextFromPDF } from '../utils/pdf';
import KeyValueTable from '../components/KeyValueTable';

const Home = () => {
  const [extractedText, setExtractedText] = useState(null);
  const [errorFaced, setErrorFaced] = useState(false);
  const [extracting, setExtracting] = useState(false);

  const handleFileUpload = async (file) => {
    try {
      setExtracting(true);
      setExtractedText(null);
      setErrorFaced(false);
      const pdfExtractedText = await extractTextFromPDF(file);
      const response = await axios.post('/api/extract', { extractedText: pdfExtractedText });
      console.log(response.data.enrichedData);
      const enrichedData = response.data.enrichedData;
      setExtractedText(enrichedData);
    } catch (error) {
      setErrorFaced(true);
      console.error('Error uploading file:', error);

      setTimeout(() => {  
        setErrorFaced(false);
      }, 5000);

    }
    finally {
      setExtracting(false);
    }
  };

  return (
    <div className='home'>
      <h1 className='headingMain'>PDF Text Extractor</h1>
      <FileUpload onFileUpload={handleFileUpload} extracting={extracting} />
      {extractedText && <KeyValueTable keyValuePairs={extractedText} />}
      {extracting && <div className='loading-spinner'></div>}
      {errorFaced &&
        <div className='errorPopUp'>
          Error while uploading file
        </div>
      }
    </div>
  );
};

export default Home;