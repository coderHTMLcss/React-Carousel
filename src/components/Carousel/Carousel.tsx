import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import car1 from '../../assets/car1.jpg';
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';
import car4 from '../../assets/car4.jpg';
import car5 from '../../assets/car5.jpg';
import CarouselItem from './CarouselItem';

const images = [car1, car2, car3, car4, car5];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Стан для збереження поточного активного слайда

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        afterChange: (index: number) => setCurrentSlide(index), // Функція, що встановлює поточний активний слайд
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className='flex items-center justify-center'>
            <div className='w-full max-w-5xl'>
                <Slider className='custom-slider' {...settings}>
                    {images.map((image, index) => (
                        <CarouselItem key={index} image={image} isActive={index === currentSlide} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
