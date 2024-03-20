
import React from 'react';

const DownloadFileZip = () => {
  const handleDownload = () => {
    // Thay thế URL bằng đường dẫn tới tệp tin bạn muốn tải xuống
    const zipFileUrl = 'https://example.com/your-file.zip';
    window.open(zipFileUrl, '_blank');
  };

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadFileZip;