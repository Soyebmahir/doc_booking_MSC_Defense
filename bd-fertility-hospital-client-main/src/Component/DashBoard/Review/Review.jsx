import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserinfo] = useState(null);
  // const user = "soyeb";
  useEffect(() => {
    fetch(`http://localhost:5000/user-route/getSingleUser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserinfo(data.result);
      });
  }, [user?.email]);
  const hanbdlAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    // const title = form.title.value;
    // const photo = form.photo.value;
    const description = form.description.value;

    const review = {
      name: userInfo?.name,
      description,
    };
    console.log(review);

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Great! Review is Posted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-16">
      <h2 className="text-3xl text-center ">Feel Free To Give Review</h2>
      <form onSubmit={hanbdlAddBlog}>
        {" "}
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          {" "}
          {/* <div>
            <label className="text-sm text-gray-700 block mb-1 font-medium">
              title
            </label>
            <input
              type="text"
              name="title"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter Blog Title"
            />{" "}
          </div>{" "} */}
          {/* <div>
            {" "}
            <label className="text-sm text-gray-700 block mb-1 font-medium">
              Photo
            </label>{" "}
            <input
              type="text"
              name="photo"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter Blog photo"
            />{" "}
          </div>{" "} */}
          <div>
            {" "}
            <label
              htmlFor="job"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Review Text
            </label>{" "}
            <textarea
              type="text"
              name="description"
              id=""
              cols="70"
              rows="7"
              className="text-sm bg-gray-100  text-gray-700 block mb-1 font-medium border-2"
            ></textarea>
          </div>{" "}
        </div>{" "}
        <div className="space-x-4 mt-8">
          {" "}
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
          >
            Post
          </button>{" "}
          <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
            Cancel
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};

export default Review;
