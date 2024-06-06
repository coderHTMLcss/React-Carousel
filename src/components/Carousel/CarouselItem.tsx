import { FC } from 'react';
import './Carousel.scss';

interface CarouselItemProps {
    image: string;
    isActive: boolean; // Додавши цей пропс, ми можемо знати, чи є слайд активним
}

const CarouselItem: FC<CarouselItemProps> = ({ image, isActive }) => {
    return (
        <div className={`shadow slide-item transition-all object-cover w-full  md:h-42 lg:h-60  rounded p-2 ${isActive ? 'opacity-100 scale-110' : 'opacity-60'}`}>
            <img src={image} alt='car' className='object-cover w-76 h-56' />
        </div>
    );
};

export default CarouselItem;