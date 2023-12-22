import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AllReview = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserinfo] = useState(null);
  const [reviews, setReviews] = useState([]);
  // const user = "soyeb";
  useEffect(() => {
    fetch(`http://localhost:5000/user-route/getSingleUser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserinfo(data.result);
      });
  }, [user?.email]);
  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.result);
      });
  }, []);
  console.log(reviews);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
      {reviews.map((review) => (
        <>
          <div className="card  bg-base-300 shadow-xl">
            <div className="card-body scroll overflow-hidden overflow-x-auto">
              <h2 className="card-title">{review?.name}</h2>
              <p className="">{review?.description}</p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AllReview;
