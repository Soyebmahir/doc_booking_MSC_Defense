import { Navbar } from "keep-react";
import { NavLink, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
import useUsers from "../Component/Hook/useUsers";
const TopNav = () => {
  const [users] = useUsers();
  console.log("the user is", users.result);
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleLogut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className=" static p-8">
      {/* this is Navbar image */}
      <Navbar.Brand>
        <img
          src="https://i.ibb.co/VHxGCpR/BD-Fertility-Hospital-Dhaka.png"
          alt="keep"
          className="py-4"
        />
      </Navbar.Brand>

      {/* here Navbar route */}

      <Navbar fluid={true} className=" mt-6">
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Divider></Navbar.Divider>

            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8"
            >
              <p className=" relative group">
                <span>
                  {" "}
                  <NavLink className="hover:text-[#DF5EA2]" to="/">
                    প্রথম পাতা
                  </NavLink>
                </span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
              </p>

              {/*  আমাদের সম্পর্কে.................................. */}

              <div className="group relative text-inherit">
                <p className=" relative group">
                  <span>
                    {" "}
                    <NavLink className="mr-1 hover:text-[#DF5EA2]">
                      আমাদের সম্পর্কে
                    </NavLink>
                  </span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                </p>

                {/* Menu list */}
                <ul className="rounded absolute z-10 hidden text-gray-700 pt-8 w-56 group-hover:block text-sm ">
                  <li className="bg-[#f1f1f1] py-2 px-4 cursor-pointer hover:text-[#DF5EA2]">
                    বাংলাদেশ ফার্টিলিটি হাসপাতাল
                  </li>
                  <li className="bg-[#f1f1f1] py-2 px-4 cursor-pointer hover:text-[#DF5EA2]">
                    আমাদের লক্ষ্য
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    আমাদের উদ্দেশ্য
                  </li>
                </ul>
              </div>

              {/* >চিকিৎসা........................................ */}

              <div className="group relative text-inherit">
                <p className=" relative group">
                  <span>
                    {" "}
                    <NavLink className="mr-1 hover:text-[#DF5EA2]">
                      চিকিৎসা
                    </NavLink>
                  </span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                </p>

                {/* Menu list */}
                <ul className="rounded absolute z-10 hidden text-gray-700 pt-8 w-56 group-hover:block text-sm ">
                  <li className="bg-[#f1f1f1] py-2 px-4 cursor-pointer hover:text-[#DF5EA2]">
                    আই ইউ আই (IUI)
                  </li>
                  <li className="bg-[#f1f1f1] py-2 px-4 cursor-pointer hover:text-[#DF5EA2]">
                    আই ভি এফ (IVF)
                  </li>

                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    আই সি এস আই (ICSI)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    মেয়েদের বন্ধ্যাত্ব যাচাই (Infertility Assessment – Female)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    পুরুষের বন্ধ্যাত্ব যাচাই (Infertility Assessment – Male)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    ভ্রূণতত্ব (Embryology)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    শুক্রাণু সংরক্ষণ (Cryopreservation)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    পরামর্শ (Counselling)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    প্রজননতত্ব (Reproductive Genetics)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    এন্ডোস্কোপি (Endoscopy)
                  </li>
                </ul>
              </div>

              {/*রোগীর সহায়িকা.............................  */}

              <div className="group relative text-inherit">
                <p className=" relative group">
                  <span>
                    {" "}
                    <NavLink className="mr-1 hover:text-[#DF5EA2]">
                      রোগীর সহায়িকা
                    </NavLink>
                  </span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                </p>

                {/* Menu list */}
                <ul className="rounded absolute z-10 hidden text-gray-700 pt-8 w-56 group-hover:block text-sm ">
                  <li className="bg-[#f1f1f1] py-2 px-4 cursor-pointer hover:text-[#DF5EA2]">
                    পি সি ও এস (PCOS)
                  </li>
                  <li className="bg-[#f1f1f1] py-2 px-4 cursor-pointer hover:text-[#DF5EA2]">
                    আই ইউ আই ব্যার্থতা (IUI Fail)
                  </li>

                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    টিউব ব্লক (Tube Block)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    শুক্রাণুর সংখ্যা কম (Low Sperm Count)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    বয়স ৪০ প্লাস (Age Above 40)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    অজানা বন্ধ্যাত্ব (Unexplained Infertility)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    রক্তে এএমএইচ কম (Low AMH)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    অনিয়মিত ঋতু (Irregular Menses)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    জেনেটিক সমস্যা (Genetic-abnormality)
                  </li>

                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    একাধিক আইভিএফ ব্যার্থতা (Multiple IVF Failure)
                  </li>

                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    এন্ডোমেট্রিওসিস (Endometriosis)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    গর্ভপাত সমস্যা (Previous Pregnancy Loss)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    শুক্রাণুহীনতা (No Sperms)
                  </li>
                  <li className="bg-[#f1f1f1] hover:text-[#DF5EA2] py-2 px-4 cursor-pointer">
                    পাতলা এন্ডোমেট্রিয়াম (Thin Endometrium)
                  </li>
                </ul>
              </div>

              <p className=" relative group">
                <span>
                  {" "}
                  <NavLink className="hover:text-[#DF5EA2]">
                    বিশেষজ্ঞ দল
                  </NavLink>
                </span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
              </p>

              <p className=" relative group">
                <span>
                  {" "}
                  <NavLink className="hover:text-[#DF5EA2]">
                    সাধারণ জিজ্ঞাসা
                  </NavLink>
                </span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
              </p>

              <p className=" relative group">
                <span>
                  {" "}
                  <NavLink className="hover:text-[#DF5EA2]">ব্লগ</NavLink>
                </span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
              </p>

              {/* <p className=" relative group">
                <span>
                  {" "}
                  <NavLink to="/gallery" className="hover:text-[#DF5EA2]">
                    গ্যালারি
                  </NavLink>
                </span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
              </p> */}

              <p className=" relative group">
                <span>
                  {" "}
                  {/* <NavLink
                    to="dashboard/addFeatures"
                    className="hover:text-[#DF5EA2]"
                  >
                    {" "}
                    ড্যাশবোর্ড
                  </NavLink> */}
                </span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#DF5EA2] group-hover:w-1/2 group-hover:transition-all"></span>
              </p>
            </Navbar.Container>

            {/* here is for small 'device.......................... */}

            <SideBar></SideBar>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2">
            {/* {
          users.map((user,index)=> <span key={index}>

          
            
            
          </span>)
        } */}
            {user ? (
              <div className="w-10 !h-10 rounded-full flex flex-row justify-center items-center gap-8 mr-10 ">
                <NavLink to="/dashboard" className="hover:text-[#DF5EA2]">
                  {" "}
                  ড্যাশবোর্ড
                </NavLink>
                <div>
                  <FaSignOutAlt
                    onClick={handleLogut}
                    className="text-xl text-[#DF5EA2] cursor-pointer"
                  ></FaSignOutAlt>
                </div>

                <img
                  title={user?.name}
                  className="rounded-full"
                  src={user?.photo}
                />
              </div>
            ) : (
              <NavLink
                to="/login"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#DF5EA2] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#DF5EA2] group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-[#DF5EA2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  লগ ইন
                </span>
              </NavLink>
            )}

            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
