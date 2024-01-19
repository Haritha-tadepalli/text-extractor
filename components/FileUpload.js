
import React, { useState } from 'react';

const FileUpload = ({ onFileUpload, extracting }) => {
  const [file, setFile] = useState(null);
  const [errorFaced, setErrorFaced] = useState(false);
  const [error, setError] = useState(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setErrorFaced(false);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file before uploading.');
      setErrorFaced(true);
      return;
    }

    onFileUpload(file);
  };

  return (
    <div className='fileUpload'>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button className="uploadButton" onClick={handleUpload} disabled={extracting}>Upload</button>
      {errorFaced &&
        <div className='errorPopUp'>
          {error}
        </div>
      }
    </div>
  );
};

export default FileUpload;
