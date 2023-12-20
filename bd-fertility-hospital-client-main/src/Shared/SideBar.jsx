import { Navbar } from "keep-react";
import { NavLink } from "react-router-dom";
import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";

const SideBar = () => {
    return (
        <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col ">
                <NavLink className='hover:text-[#DF5EA2] font-semibold ml-5' to="প্রথম পাতা ">প্রথম পাতা</NavLink>
               
               
               

         
                <Accordion
      openIcon={<CaretUp />}
      closeIcon={<CaretDown />}
      iconPosition="right"
      flush={true}
    >

        {/* আমাদের সম্পর্কে.............. */} 
      <Accordion.Panel className="text-center">
   
    
        <Accordion.Title>
        <NavLink className='hover:text-[#DF5EA2] font-semibold' to="প্রথম পাতা">আমাদের সম্পর্কে</NavLink>
        </Accordion.Title>
        <Accordion.Content className="text-sm">
     
        <NavLink className="  font-light cursor-pointer hover:text-[#DF5EA2]">
          বাংলাদেশ ফার্টিলিটি হাসপাতাল
        </NavLink>
         <NavLink className="mt-2 font-light cursor-pointer hover:text-[#DF5EA2]">
                    আমাদের লক্ষ্য
         </NavLink>
         <NavLink className=" font-light hover:text-[#DF5EA2]  cursor-pointer">
                    আমাদের উদ্দেশ্য
         </NavLink>
   
   
        </Accordion.Content>
      </Accordion.Panel>
   
   {/* চিকিৎসা......................... */}
      <Accordion.Panel>
        <Accordion.Title>
        <NavLink className='hover:text-[#DF5EA2] font-semibold' to="প্রথম পাতা">চিকিৎসা</NavLink>
        </Accordion.Title>
        <Accordion.Content className="!text-sm">
        <NavLink className=" cursor-pointer hover:text-[#DF5EA2]">
                  আই ইউ আই (IUI)
                  </NavLink>
                  <NavLink className="  cursor-pointer hover:text-[#DF5EA2]">
                  আই ভি এফ (IVF)
                  </NavLink>
             
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  আই সি এস আই (ICSI)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  মেয়েদের বন্ধ্যাত্ব যাচাই (Infertility Assessment – Female)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  পুরুষের বন্ধ্যাত্ব যাচাই (Infertility Assessment – Male)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  ভ্রূণতত্ব (Embryology)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  শুক্রাণু সংরক্ষণ (Cryopreservation)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  পরামর্শ (Counselling)

                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  প্রজননতত্ব (Reproductive Genetics)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  এন্ডোস্কোপি (Endoscopy)
                  </NavLink>
        </Accordion.Content>
      </Accordion.Panel>
   
   {/* রোগীর সহায়িকা...................... */}
      <Accordion.Panel>
        <Accordion.Title>
        <NavLink className='hover:text-[#DF5EA2] font-semibold' to="প্রথম পাতা">রোগীর সহায়িকা</NavLink>
        </Accordion.Title>
        <Accordion.Content className="text-sm">
        <NavLink className=" cursor-pointer hover:text-[#DF5EA2]">
                  পি সি ও এস (PCOS)
                  </NavLink>
                  <NavLink className=" cursor-pointer hover:text-[#DF5EA2]">
                  আই ইউ আই ব্যার্থতা (IUI Fail)
                  </NavLink>
             
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  টিউব ব্লক (Tube Block)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  শুক্রাণুর সংখ্যা কম (Low Sperm Count)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  বয়স ৪০ প্লাস (Age Above 40)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  অজানা বন্ধ্যাত্ব (Unexplained Infertility)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  রক্তে এএমএইচ কম (Low AMH)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  অনিয়মিত ঋতু (Irregular Menses)

                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  জেনেটিক সমস্যা (Genetic-abnormality)
                  </NavLink>

                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  একাধিক আইভিএফ ব্যার্থতা (Multiple IVF Failure)
                  </NavLink>
             
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  এন্ডোমেট্রিওসিস (Endometriosis)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  গর্ভপাত সমস্যা (Previous Pregnancy Loss)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  শুক্রাণুহীনতা (No Sperms)
                  </NavLink>
                  <NavLink className=" hover:text-[#DF5EA2]  cursor-pointer">
                  পাতলা এন্ডোমেট্রিয়াম (Thin Endometrium)
                  </NavLink>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
         
         
         
         
         
         
         
                <NavLink className='hover:text-[#DF5EA2] font-semibold ml-5 pb-4'>বিশেষজ্ঞ দল</NavLink>
                <NavLink className='hover:text-[#DF5EA2] font-semibold ml-5  pb-4'>সাধারণ জিজ্ঞাসা</NavLink>
                <NavLink className='hover:text-[#DF5EA2] font-semibold ml-5  pb-4'>ব্লগ</NavLink>
                <NavLink className='hover:text-[#DF5EA2 font-semibold ml-5  pb-4'>গ্যালারি</NavLink>
                <NavLink className='hover:text-[#DF5EA2 font-semibold ml-5  pb-4'>যোগাযোগ</NavLink>
              </Navbar.Container>
            </Navbar.Collapse>
    );
};

export default SideBar;