import React, { useContext, useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  // const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [userInfo, setUserinfo] = useState(null);
  // const user = "soyeb";
  useEffect(() => {
    fetch(`http://localhost:5000/user-route/getSingleUser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserinfo(data.result);
      });
  }, [user?.email]);

  useEffect(() => {
    // if (userInfo) {
    fetch(`http://localhost:5000/booking/patient?email=${user?.email}`)
      .then((res) => {
        // console.log("res", res);
        // if (res.status === 401 || res.status === 403) {
        //   signOut(auth);
        //   localStorage.removeItem("accessToken");
        //   navigate("/");
        // }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAppointments(data?.data);
      });
    // }
  }, [user?.email]);

  return (
    <div>
      <h2>My Appointments: {appointments?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              {/* <th>Payment</th> */}
            </tr>
          </thead>
          <tbody>
            {appointments?.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
