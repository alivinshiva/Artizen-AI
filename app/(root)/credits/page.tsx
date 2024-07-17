import React from 'react';

function CreditPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
        <svg
          className="mx-auto mb-4 h-12 w-12 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01m-6.938 4a9 9 0 1 1 13.856 0H5.062z" />
        </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Page under Development</h1>
        <p className="text-gray-600">
          We are working hard to bring this page to you soon. Stay tuned!
        </p>
      </div>
    </div>
  );
}

export default CreditPage;
