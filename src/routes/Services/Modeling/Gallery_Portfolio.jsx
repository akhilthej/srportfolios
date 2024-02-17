// Gallery.js
import React, { useState } from 'react';
import ImageGalleryData from '../../../assets/Images/ImageGalleryData';
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleLightboxClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {ImageGalleryData.map((image, index) => (
        <div key={index} className="gallery-item">
          <img
            src={image.url}
            alt={image.caption}
            onClick={() => handleImageClick(image)}
          />
        </div>
      ))}

      {selectedImage && (
        <div className="lightbox" onClick={handleLightboxClose}>
          <div className="lightbox-content">
            <img src={selectedImage.url} alt={selectedImage.caption} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
