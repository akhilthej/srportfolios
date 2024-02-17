import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26,image27,image28,image29,image30,image31,image32,image33,image34,image35,image36,image37,image38,image39,image40,image41,image42,image43,image44,image45,image46,image47,image48,image49,image50,image51,image52,image53,image54,image55,image56,image57,image58,image59,image60,image61,image62,image63,image64,image65} from '../assets/Images/imagesslider'
const BrandCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth < 768 ? 3 : 6,
  };

  const brandImages = [
    image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26,image27,image28,image29,image30,image31,image32,image33,image34,image35,image36,image37,image38,image39,image40,image41,image42,image43,image44,image45,image46,image47,image48,image49,image50,image51,image52,image53,image54,image55,image56,image57,image58,image59,image60,image61,image62,image63,image64,image65,
    
    // Add more image URLs here
  ];

  return (
    <div className="py-10 bg-gray-100">
      <p className='text-center font-bold pb-5'>Our Gallery</p>
      <div className="container mx-auto ">
        <Slider {...settings}>
          {brandImages.map((imageUrl, index) => (
            <div key={index}>
              <img 
                src={imageUrl}
                alt={`Brand Logo ${index + 1}`}
                width={200} // Set the desired width
                height={200}  // Set the desired height
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandCarousel;