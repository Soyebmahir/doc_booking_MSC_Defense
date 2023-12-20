import { Outlet } from "react-router-dom";
import TopNav from "../Shared/TopNav";
import Footer from "../Shared/Footer";



const Main = () => {
  
    return (
        <div>
              <TopNav></TopNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;