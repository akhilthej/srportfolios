// Gallery.js
import React, { useState } from 'react';
import ImageGalleryData from '../../assets/Images/ImageGalleryData';
import { GlobalData } from '../../components/data/GlobalData';
import { Helmet } from "react-helmet-async";
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
    <div>
        <Helmet>
        <title>Gallery</title>
        <meta
          name="description"
          content="If your looking for best portfolio photo shoot in hyderabad contact us"
        />
        <link rel="canonical" href="/contactus" />
      </Helmet>

     {/* Title Card */}
     <section
        className="py-10 sm:py-40"
        style={{
          backgroundImage:`url("${GlobalData.Coverimages.ContactusCover}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              {" "}
              {/* Align titles to the right on mobile, left on larger screens */}
              <h3 className="cursor-default  text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-black tracking-tight">
                Our Portfolios
              </h3>
              <p className="cursor-default text-black sm:text-sm text-xs text-center sm:ml-0">
                Welcome to our Gallery
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:{GlobalData.company.companyEmail}">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Email
                  </a>
                </a>
                <a href="tel:{GlobalData.company.companyPrimaryPhone}">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Phone
                  </a>
                </a>
              
                <a href={GlobalData.company.companyWhatsapp}>
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    WhatsApp
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


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
    </div>
  );
};

export default Gallery;
