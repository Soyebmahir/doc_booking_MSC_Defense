import GalleryCarusel from "./GalleryCarusel";
import OurDoctorsGallery from "./OurDoctorsGallery";
import OurFaciclities from "./OurFaciclities";
import ServiceGallary from "./ServiceGallary";

const Gallery = () => {
    return (
        <div>
         <GalleryCarusel></GalleryCarusel>
         <ServiceGallary></ServiceGallary>
         <OurFaciclities></OurFaciclities>
         <OurDoctorsGallery></OurDoctorsGallery>
        
        </div>
    );
};

export default Gallery;