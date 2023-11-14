import React from 'react';
import AlbumButton from './AlbumButton';

export default {
  title: 'AlbumButton',
  component: AlbumButton,
};

export const Default = () => (
  <AlbumButton
    title="Quel album écouter aujourd'hui ?"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => console.log('Button clicked')}
  />
);