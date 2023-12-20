const Findmore = () => {
  return (
    <div>
    <div className="text-center py-10">
    <h2 className="text-3xl mx-auto font-bold  border-b-2 border-[#E05EA6] text-[#E05EA6] inline  "> 
        আরো জানুন
      </h2>
    
    </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl text-[#E05EA6] font-semibold pb-10">
            যোগাযোগের সময়
          </h2>
          <h2>
            {" "}
            <span className="font-semibold">সপ্তাহে ৫ দিন </span> দুপুর -- ১২ টা
            – রাত ৮টা <br /> (রবিবার, বৃহস্পতিবার বন্ধ)
          </h2>
          <hr className="mt-4 mr-10" />

          <h2 className="mt-5">
            {" "}
            <span className="font-semibold">ডি-২/ইনজেকশন -- </span> বিকাল 4 টা –
            5 টা <br /> পরিষেবা
          </h2>
          <hr className="mt-4 mr-10" />

          <div className="flex lg:flex-row flex-col lg:gap-8 mt-6">
            <img
              className="h-12 w-12"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxvMT-FpZS0GnKEJtJjC6hY7ZGnQGcSkGm57k8sj54DcueSoOR"
              alt=""
            />

            <div className="">
              <h2 className="font-semibold">২৪/৭ যোগাযোগ করুন</h2>
              <h2>০৯৬৭৮২২১১৫৯, ০১৮৯৪৮৭৭৮১১</h2>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-8 mt-6">
            <img
              className="h-12 w-12"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkbBMp3F6utlmKYZc8ov396IXPjCNQFKjBiiD2O11Gv8WC1E0f"
              alt=""
            />

            <div className="pr-8">
              <h2 className="font-semibold">আমাদের ঠিকানা</h2>
              <h2>
                {" "}
                প্লট#১০, ব্লক#ই, লেভেল#৩-৪, প্রধান সড়ক, বনশ্রী, রামপুরা,
                ঢাকা-১২১২
              </h2>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-8 mt-6">
            <img
              className="h-12 w-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyE7GyOJEsVonGDmfqZj1HyvtKo83Mh43tGcXKlVnT-CDctKMe"
              alt=""
            />

            <div className="pr-8  pb-6">
              <h2 className="font-semibold">এপয়েন্টমেন্ট নিন</h2>
              <h2> ০৯৬৭৮২২১১৫৯, ০১৮৯৪৮৭৭৮১১</h2>
            </div>
          </div>
        </div>

        <div>
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Plot%2010,%20Block%20E,%20Banasree%20Main%20Rd,%20Dhaka%201219+(Bangladesh%20Fertility%20Hospital)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Population mapping</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Findmore;
