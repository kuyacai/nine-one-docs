// src/components/plurk/CloseButton.js
import React from 'react';

const CloseButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="tw-text-gray-500 hover:tw-text-gray-700 focus:outline-none"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 9l-3.5 3.5a1 1 0 01-1.414-1.414L8.586 10 5.086 6.5A1 1 0 016.5 5.086L10 8.586l3.5-3.5a1 1 0 011.414 1.414L11.414 10l3.5 3.5a1 1 0 01-1.414 1.414L10 11.414l-3.5 3.5a1 1 0 01-1.414-1.414L8.586 10z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

export default CloseButton;