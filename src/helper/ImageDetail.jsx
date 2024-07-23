import React from 'react';
import { useParams } from 'react-router-dom';

const ImageDetail = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Image Detail for Image {id}</h1>
      {/* Render detailed information for the image with the given id */}
    </div>
  );
};

export default ImageDetail;
