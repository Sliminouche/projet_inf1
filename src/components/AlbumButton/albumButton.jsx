import React from 'react';

const AlbumButton = ({ title, className, onClick }) => (
  <button
    className={className}
    onClick={onClick}
  >
    {title}
  </button>
);

export default AlbumButton;
