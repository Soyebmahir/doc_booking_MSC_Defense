/* eslint-disable react/prop-types */
import { Avatar, Card } from "keep-react";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const FeaturesCard = ({feature}) => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


    return (
        <div data-aos="fade-up"
        data-aos-duration="3000">
          <Card  className="!bg-[#6E296C] !h-96 !text-white">
        <Card.Container className="absolute right-3.5 top-3.5 flex h-full w-full cursor-pointer items-center justify-center rounded-full">
              
              </Card.Container>
              <Card.Container className="flex flex-col items-center justify-center">
                <Card.Container className="absolute -top-10  rounded-full ring-4 ring-white ring-offset-0">
                  <Avatar size="xl" shape="circle" img={feature.img} />
                </Card.Container>
                <Card.Container className="mb-3 md:mb-3  mt-10 text-center">
                  <Card.Title className="text-body-5 mb-3 md:mb-3 font-bold !text-3xl md:text-body-4 ">{feature.title}</Card.Title>
                  <hr className="text-[#E05EA6] mx-20 " />
                  <Card.Title className="!text-body-6 font-normal text-sm text-justify md:text-body-5 lg:p-4 px-4 ">{feature.description}</Card.Title>
                  <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#E05EA6] hover:bg-white group px-8 py-2 rounded-full">
                
                  <span className="w-0 h-0 rounded bg-[#CB2782] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-full  text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                   READ MORE
          </span>
                 </button>
                </Card.Container>
               
              </Card.Container>
             
            </Card>
        </div>
    );
};

export default FeaturesCard;