/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

// import { useContext } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = {
      email,
      password,
    };
    console.log(user);
    // http://localhost:5000

    signIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    // fetch("http://localhost:5000/user-route/login", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data === "success") {
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Login Successfully",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //       navigate("/");
    //     } else {
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "check your email and password",
    //         // title: data,
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     }
    //   });
  };

  return (
    <div className="p-12">
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-[#DF5EA2]">Sign in</h1>
            <p className="mt-2 text-[#DF5EA2]">
              Sign in below to access your account
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleLoginSubmit}>
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                />
                <label
                  for="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  for="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#DF5EA2] px-3 py-4 text-white "
                >
                  Sign in
                </button>
              </div>
              <Link to="/register">
                <p className="text-center text-sm text-gray-500">
                  Don&#x27;t have an account yet?
                  <a className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                    Register
                  </a>
                  .
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
