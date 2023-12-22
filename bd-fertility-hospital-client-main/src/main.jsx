import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Component/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registar/Register";
import AuthProvider from "./Provider/AuthProvider";
import DashBoard from "./Component/DashBoard/DashBoard";
import AddFeatures from "./Component/DashBoard/AdminRoute/AddFeatures";
import AddDoctors from "./Component/DashBoard/AdminRoute/AddDoctors";
import Appointment from "./Pages/Appointment/Appointment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import from '@tanstack/react-query'
import ManageUsers from "./Component/DashBoard/AdminRoute/ManageUser/ManageUsers";
import AddBlog from "./Pages/Home/Blogs/AddBlog";
import Gallery from "./Pages/Gallery/Gallery";
import Review from "./Component/DashBoard/Review/Review";
import AllReview from "./Component/DashBoard/AllReview/AllReview";
import MyAppointments from "./Component/DashBoard/MyAppointments/MyAppointments";
import AllAppointments from "./Component/DashBoard/AllAppointments/AllAppointments";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      // {
      //   path: "/dashboard",
      //   element: <AddFeatures></AddFeatures>,
      // },
      {
        path: "addFeatures",
        element: <AddFeatures></AddFeatures>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "addDoctor",
        element: <AddDoctors></AddDoctors>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "all-review",
        element: <AllReview></AllReview>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "my-appointment",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "all-appointment",
        element: <AllAppointments></AllAppointments>,
      },
      {
        path: "addBlog",
        element: <AddBlog></AddBlog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
