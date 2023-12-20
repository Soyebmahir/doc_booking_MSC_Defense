import { useEffect, useState } from "react";

const OurDoctorsGallery = () => {
    const [images,setImgaes] = useState([])

    useEffect(()=>{
        fetch('ourDoctor.json')
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            setImgaes(data)
        })
    },[])

    return (
        <div className="text-center">
        <div className="lg:mt-24 lg:mb-12 md:mt-10 md:mb-10">
        <h2 className="text-3xl mx-auto font-bold  text-center border-b-2 border-[#E05EA6] text-[#E05EA6] inline  "> 
  আমাদের ডাক্তার
</h2>
        </div>

      <div className=" gap-2 lg:px-20 md:px-16 lg:py-10  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
          {
             images.map((item,index)=> <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer" key={index}>
                  <img className="lg:h-64 lg:w-72 rounded-lg object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125" src={item.img} alt="" />
                  <div className="absolute bg-opacity-60 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
          
             </div>)
          }
      </div>
  </div>
    );
};

export default OurDoctorsGallery;