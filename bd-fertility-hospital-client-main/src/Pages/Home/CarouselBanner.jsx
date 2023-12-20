import { Carousel } from "keep-react";

const CarouselBanner = () => {
    return (
        <div className="">

<Carousel slideInterval={3000} showControls={true} indicators={true} className="lg:!h-[500px]">
      <img
        src="https://i.ibb.co/n3k32JH/carousel-1.jpg"
        alt="slider-1"
        className="h-full"
       
      />
      <img
        src="https://i.ibb.co/FJyRXcH/carousel2.jpg"
        alt="slider-2"
        className="h-full"
      />
      <img
        src="https://www.ivfbangladesh.com/images/temp-images/slide-four.jpg"
        alt="slider-3"
        className="h-full"
      />
     
      
    
    </Carousel>
            
        </div>
    );
};

export default CarouselBanner;