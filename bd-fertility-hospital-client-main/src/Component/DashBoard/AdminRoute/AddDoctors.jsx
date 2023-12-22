import Swal from "sweetalert2";

const AddDoctors = () => {
  const hanbdlAddDoctorSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const location = form.location.value;
    const doctorImg = form.doctorImg.value;
    const DoctorIcon = form.DoctorIcon.value;
    const position = form.position.value;
    const facebook = form.facebook.value;
    const youtube = form.youtube.value;
    const linkedin = form.linkedin.value;

    const doctorData = {
      name,
      title,
      location,
      doctorImg,
      DoctorIcon,
      position,
      socialLinks: {
        facebook,
        youtube,
        linkedin,
      },
    };

    console.log(doctorData);

    fetch("http://localhost:5000/doctor-route/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doctorData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Wow! Doctor added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="p-8 rounded border border-gray-200">
        {" "}
        <h1 className="font-medium text-3xl">Add A Book</h1>{" "}
        <form onSubmit={hanbdlAddDoctorSubmit}>
          {" "}
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            {" "}
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter your name"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                title
              </label>{" "}
              <input
                type="text"
                name="title"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="title"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                location
              </label>{" "}
              <input
                type="text"
                name="location"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="location"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                doctorImg
              </label>{" "}
              <input
                type="text"
                name="doctorImg"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="doctorImg"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                DoctorIcon
              </label>{" "}
              <input
                type="text"
                name="DoctorIcon"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="DoctorIcon"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                position
              </label>{" "}
              <input
                type="text"
                name="position"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="position"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                facebook
              </label>{" "}
              <input
                type="text"
                name="facebook"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="facebook"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                youtube
              </label>{" "}
              <input
                type="text"
                name="youtube"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="youtube"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                linkedin
              </label>{" "}
              <input
                type="text"
                name="linkedin"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="linkedin"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="space-x-4 mt-8">
            {" "}
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Save
            </button>{" "}
            <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
              Cancel
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    </div>
  );
};

export default AddDoctors;
