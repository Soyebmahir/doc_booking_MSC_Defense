/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots, price } = treatment;
  // const [user, loading, error] = useAuthState(auth);
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

  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      // price,
      patient: userInfo.email,
      patientName: userInfo?.name,
      phone: event.target.phone.value,
    };
    console.log({ booking });

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booked Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          // toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        setTreatment(null);
        window.location.reload();
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={userInfo?.name || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={userInfo?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
