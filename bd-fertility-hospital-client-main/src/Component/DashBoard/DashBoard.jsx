import { Link, Outlet } from "react-router-dom";
import { FaBlog, FaHome, FaPlusSquare, FaUserMd, FaUserPlus } from "react-icons/fa";


const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* Page content here */}
  
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu pt-32 text-center w-80 min-h-full bg-[#DF5EA2] text-white text-inherit">
      {/* Sidebar content here */}
      <li><Link to='/dashboard/addFeatures'><FaPlusSquare></FaPlusSquare> ফিচার এডড করুন</Link></li>
      <li><Link to='/dashboard/addDoctor' className="text-white"><FaUserMd></FaUserMd> ডাক্তার এডড করুন</Link></li>
      <li><Link to='/dashboard/manageUsers' className="text-white"> <FaUserPlus></FaUserPlus> ইউজার ম্যানেজ</Link></li>
      <li><Link to='/dashboard/addBlog' className="text-white"> <FaBlog></FaBlog>  ব্লগ  এডড করুন </Link></li>
    
      <li>  <Link to='/'><FaHome className="text-white"></FaHome> হোম</Link></li>
    </ul>
  
  </div>
</div>

    );
};

export default DashBoard;