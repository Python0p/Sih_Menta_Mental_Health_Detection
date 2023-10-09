import React, { useState } from "react";
// import Header from "./Header";

const AppointmentForm = () => {
  // Dummy data for doctors
  const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Brown"];
  const hospitals = ["Hospital A", "Hospital B", "Hospital C"];
  const times = ["11:00 - 12:00 hrs", "13:00 - 14:00 hrs", "15:00 - 16:00 hrs"];
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (send appointment request, etc.)
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 5000); // Notification will disappear after 10 seconds (10000 milliseconds)
  };

  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col items-end mr-8 mt-8">
        <form className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Appointment Booking</h2>
          <div className="mb-4">
            <label
              htmlFor="hospital"
              className="block text-sm font-medium text-white"
            >
              Select Hospital
            </label>
            <select
              id="hospital"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 text-gray-700"
            >
              {/* Options for hospitals */}
              {hospitals.map((hospital, index) => (
                <option key={index} value={hospital}>
                  {hospital}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="doctor"
              className="block text-sm font-medium text-white"
            >
              Select Doctor
            </label>
            <select
              id="doctor"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 text-gray-700"
            >
              {/* Options for doctors */}
              {doctors.map((doctor, index) => (
                <option key={index} value={doctor}>
                  {doctor}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-white"
            >
              Select Time
            </label>
            <select
              id="time"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 text-gray-700"
            >
              {/* Options for appointment time */}
              {times.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
        {notificationVisible && (
          <div className="bg-green-500 text-white py-2 px-4 mt-4 rounded-lg shadow-md">
            Your appointment request has been sent!
          </div>
        )}
      </div>
    </>
  );
};

export default AppointmentForm;
