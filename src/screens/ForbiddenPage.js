// ForbiddenPage.js
import React from 'react';

const ForbiddenPage = () => {
  return (
    <div className="forbidden-container">
      <div className="error-page">
        <h1 className='title-for'>Error 403: Forbidden</h1>
        <p className='for-p'>Sorry, you do not have permission to access this page.</p>
      </div>
    </div>
  );
};

export default ForbiddenPage;
