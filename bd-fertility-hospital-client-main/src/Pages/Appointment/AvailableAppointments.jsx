/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { AuthContext } from "../../Provider/AuthProvider";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const { loading } = useContext(AuthContext);
  const [services, setservices] = useState([]);

  const formattedDate = format(date, "PP");
  // const {
  //   data: services,
  //   isLoading,
  //   refetch,
  // } = useQuery(["available", formattedDate], () =>
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
  //     res.json()
  //   )
  // );
  // useEffect(() => {
  //   fetch(
  //     `https://doctorsportal-zeta.vercel.app/available?date=${formattedDate}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setservices(data));
  // }, [formattedDate]);
  useEffect(() => {
    fetch("../../../public/services.json")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);

  if (loading) {
    // return <Loading></Loading>;
    return <progress className="progress w-56"></progress>;
  }
  console.log({ services });
  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          // refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
