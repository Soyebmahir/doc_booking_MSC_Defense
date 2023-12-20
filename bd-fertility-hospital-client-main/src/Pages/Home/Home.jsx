import RecentBlog from "./Blogs/RecentBlog";
import CarouselBanner from "./CarouselBanner";
import ExpertiseDoctor from "./ExpertiseDoctor";
import Features from "./Features";
import Findmore from "./Findmore";

const Home = () => {
    return (
        <div>
           <CarouselBanner></CarouselBanner>
           <Features></Features>
           <ExpertiseDoctor></ExpertiseDoctor>
           <Findmore></Findmore>
           <RecentBlog></RecentBlog>
        </div>
    );
};

export default Home;