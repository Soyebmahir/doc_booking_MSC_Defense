import Swal from "sweetalert2";

const AddFeatures = () => {
  const hanbdlBookSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const description = form.description.value;

    const features = {
      title,
      img,
      description,
    };
    console.log(features);

    fetch("https://hospitalupdate.abinashfoundation.com/bd-fertility/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(features),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Yeah! Features is added",
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
        <form onSubmit={hanbdlBookSubmit}>
          {" "}
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            {" "}
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                title
              </label>
              <input
                type="text"
                name="title"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter your name"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Photo
              </label>{" "}
              <input
                type="text"
                name="img"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="your photo"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
                htmlFor="job"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Description
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

export default AddFeatures;
