import React, { useState } from 'react';

function Admin() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('resume', file);

    // Upload to backend
    fetch('/api/uploadResume', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Resume updated successfully!');
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div className="admin-upload-section">
      <h2>Upload New Resume</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Resume</button>
    </div>
  );
}

export default Admin;
