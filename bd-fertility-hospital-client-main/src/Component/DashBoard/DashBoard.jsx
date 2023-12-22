import { Link, Outlet } from "react-router-dom";
import {
  FaBlog,
  FaBookMedical,
  FaComment,
  FaHome,
  FaPlusSquare,
  FaUserMd,
  FaUserPlus,
} from "react-icons/fa";
import TopNav from "../../Shared/TopNav";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DashBoard = () => {
  const { user, loading } = useContext(AuthContext);
  const [userInfo, setUserinfo] = useState(null);
  // const user = "soyeb";
  useEffect(() => {
    fetch(`http://localhost:5000/user-route/getSingleUser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserinfo(data.result);
      });
  }, [user?.email]);
  console.log({ userInfo }, user?.email);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div>
      <TopNav></TopNav>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu pt-32 text-center w-80 min-h-full bg-[#DF5EA2] text-white text-inherit">
            {/* Sidebar content here */}
            {userInfo?.role == "admin" ? (
              <>
                <h1 className="uppercase">{userInfo?.role}</h1>
                <li>
                  <Link to="/dashboard/all-appointment">
                    <FaPlusSquare></FaPlusSquare> এপয়েন্টমেন্টস দেখুন
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addFeatures">
                    <FaPlusSquare></FaPlusSquare> ফিচার এডড করুন
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addDoctor" className="text-white">
                    <FaUserMd></FaUserMd> ডাক্তার এডড করুন
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageUsers" className="text-white">
                    {" "}
                    <FaUserPlus></FaUserPlus> ইউজার ম্যানেজ
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addBlog" className="text-white">
                    {" "}
                    <FaBlog></FaBlog> ব্লগ এডড করুন{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/all-review" className="text-white">
                    {" "}
                    <FaBlog></FaBlog> রিভিউ দেখুন{" "}
                  </Link>
                </li>
              </>
            ) : (
              <>
                <h1 className="uppercase">{userInfo?.name}</h1>

                <li>
                  <Link to="/dashboard/appointment" className="text-white">
                    {" "}
                    <FaBookMedical></FaBookMedical> এপয়েন্টমেন্টস নিন{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/my-appointment" className="text-white">
                    {" "}
                    <FaBookMedical></FaBookMedical> আমার এপয়েন্টমেন্টস{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/review" className="text-white">
                    {" "}
                    <FaComment></FaComment> রিভিউ দিন{" "}
                  </Link>
                </li>
              </>
            )}

            <li>
              {" "}
              <Link to="/">
                <FaHome className="text-white"></FaHome> হোম
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
