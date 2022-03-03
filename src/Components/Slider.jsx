import React, { useState } from 'react';
import '../Styles/slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    const images = ["banner1.jpg", 'banner2.jpg','banner3.jpg'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImages, setSelectedImages] = useState(images[0]);

    const selectNewImage = (index, images, next = true ) => {

        const condition = next ? selectedIndex < images.length -1 : selectedIndex >0;
        const nextIndex = next ?  (condition ? selectedIndex +1 : 0) : (condition ? selectedIndex -1 : images.length -1); 

        setSelectedImages(images[nextIndex]);
        setSelectedIndex(nextIndex);

    }

    const previus = () =>{
        selectNewImage(selectedIndex, images, false);
    }

    const next = () => {

        selectNewImage(selectedIndex, images);

    }
  return (
      <>
        <section className='container-img-botones'>
            <img src={require(`../Images/${selectedImages}`)} alt="imagenes" />
            <section className='container-botones'>
               <button onClick={previus}><FontAwesomeIcon className='icon-banner' icon={faChevronLeft} /></button>
               <button onClick={next}><FontAwesomeIcon className='icon-banner' icon={faChevronRight} /></button>
            </section>
        </section>
    
     
      </>
    
  )
}

export default Slider
