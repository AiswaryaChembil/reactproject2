import React from 'react';
import './ImageGallery.css'; 

import img1 from '../assets/image108.png';
import img2 from '../assets/image9.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';
import img5 from '../assets/image5.png';
import img6 from '../assets/image6.png';
import img7 from '../assets/image7.png';
import img8 from '../assets/image8.png';

function ImageGallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const marginValues = [
    { top: '10%', right: '-5%', bottom: '0%', left: '0%' }, 
    { top: '5%', right: '0%', bottom: '0%', left: '3%' }, 
    { top: '0.2%', right: '0.5%', bottom: '4%', left: '2.5%' },
    { top: '5%', right: '0%', bottom: '0%', left: '0%' },
    { top: '6%', right: '-14%', bottom: '6%', left: '5%' },
    { top: '2%', right: '10%', bottom: '7%', left: '10%' },
    { top: '0%', right: '0%', bottom: '0%', left: '0%' },
    { top: '6%', right: '0%', bottom: '0%', left: '0%' },
  ];

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`img-${index}`}
          className={`circle-image ${index === 0 ? 'lemon-yellow' : index === 1 ? 'light-blue' : index === 2 ? 'violet' : index === 3 ? 'dark-yellow' : index === 4 ? 'lavender' : index === 5 ? 'flower-yellow' : index === 6 ? 'light-green' : index === 7 ? 'sky-blue' : ''}`}
          style={{
            marginTop: marginValues[index].top,
            marginRight: marginValues[index].right,
            marginBottom: marginValues[index].bottom,
            marginLeft: marginValues[index].left,
          }}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
