import { useEffect, useState } from "react";
import DoctorsCard from "./Cards.jsx/DoctorsCard";

const ExpertiseDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(
      "https://hospitalupdate.abinashfoundation.com/doctor-route/getAllDoctors"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setDoctors(data.result);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center text-4xl lg:pt-24 md:pt-12 pt-10 pb-8 text-[#E05EA6] font-semibold ">
        অভিজ্ঞ চিকিৎসকগণ
      </h2>

      <h2 className="py-6 text-center px-12 text-xl">
        দেশেই আন্তর্জাতিক মানের আইভিএফ/ আই ইউ আই বিশেষজ্ঞ চিকিৎসক দ্বারা
        পরিচালিত “বাংলাদেশ ফার্টিলিটি হাসপাতাল“। রয়েছে এ্যাপোলো হাসপাতালে দীর্ঘ
        ১০ বছরেরও বেশি কাজের অভিজ্ঞতা সম্পন্ন অভিজ্ঞ টিম। এছাড়াও রয়েছে বঙ্গবন্ধু
        শেখ মুজিব মেডিক্যাল বিশ্ববিদ্যালয়ের বন্ধ্যাত্ব বিভাগের অধ্যাপক ও বিভাগীয়
        প্রধান ডা. জেসমিন বানু ও ঢাকা মেডিকেল কলেজ হাসপাতালের বন্ধ্যাত্ব বিভাগের
        সাবেক বিভাগীয় প্রধান ডা. নিলুফার ইয়াসমিন ও সহযোগী অধ্যাপক ডা. ফ্লোরিডা
        রহমান।
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 pt-12 gap-4">
        {doctors.map((doctor, index) => (
          <div key={index}>
            <DoctorsCard doctor={doctor}></DoctorsCard>
          </div>
        ))}
      </div>

      <button className="btn relative flex mx-auto mt-12 items-center justify-start overflow-hidden transition-all bg-[#E05EA6] hover:bg-white group px-8 py-2 rounded-full ">
        <span className="w-0 h-0 rounded bg-[#CB2782] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
        <span className="w-full  text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
          FIND MORE
        </span>
      </button>

      <img
        className="py-12"
        src="https://www.bdfertilityhospital.com/wp-content/uploads/2022/08/unnamed-file.png"
        alt=""
      />
    </div>
  );
};

export default ExpertiseDoctor;
