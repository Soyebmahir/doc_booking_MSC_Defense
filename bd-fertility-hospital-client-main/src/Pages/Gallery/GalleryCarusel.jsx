import { Carousel } from "keep-react";
const GalleryCarusel = () => {
    return (
        <div className="py-6">
             <Carousel className="lg:!h-[450px]" slideInterval={5000} showControls={true} indicators={true}>
      <img
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*zeiDlGKGJcfY12IM"
        alt="slider-1"
        className="!h-full !w-full"
      />
      <img
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tVGZBZEitVhhh2Oh"
        alt="slider-2"
        className="!h-full !w-full"
      />
      <img
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*SU01n_pOQM7cN01z.jpeg"
        alt="slider-3"
        className="!h-full !w-full"
      />
      <img
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1rgBbohZvE2j0dQB0H7frA.png"
        alt="slider-4"
        className="!h-full !w-full"
      />
    </Carousel>
        </div>
    );
};

export default GalleryCarusel;