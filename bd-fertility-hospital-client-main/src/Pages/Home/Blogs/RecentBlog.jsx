import { MagnifyingGlass } from "phosphor-react";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

const RecentBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blog-route/getAllBlogs")
      .then((res) => res.json())
      .then((data) => {
        console.log("the blog is", data?.result);
        setBlogs(data?.result);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="pt-16 pb-12 text-center">
        <h2 className="text-4xl font-bold inline border-b-2 border-[#E05EA6] text-[#E05EA6]  ">
          সম্প্রতিক পোষ্ট
        </h2>
        <p className="pt-4">আমাদের ব্লগ পোষ্টসমূহ</p>
      </div>

      <div className="p-8">
        <div className="flex  items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* ..............একটি সফল টেস্টটিউব বেবি */}

            {blogs.map((blog, index) => (
              <div
                key={index}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div className="lg:h-96 lg:w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={blog.photo}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <MagnifyingGlass className="!w-12 !h-12 text-[#E05EA6] "></MagnifyingGlass>
                  <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {blog.title}
                  </p>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                    className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#E05EA6] hover:bg-white group px-8 py-2 rounded-full"
                  >
                    <span className="w-0 h-0 rounded bg-[#CB2782] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full  text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                      READ MORE
                    </span>
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <h3 className="font-bold text-lg text-[#E05EA6]">
                        বিস্তারিত জানুন.........
                      </h3>
                      <p className="p-4 text-justify space-x-2 ">
                        {blog.description}
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#E05EA6] hover:bg-white group px-8 py-2 rounded-full">
                            <span className="w-0 h-0 rounded bg-[#CB2782] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full  text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                              Close
                            </span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
