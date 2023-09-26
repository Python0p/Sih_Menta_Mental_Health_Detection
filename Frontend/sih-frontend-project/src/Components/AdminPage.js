import React from "react";
import graph1 from "../Images/graph1.png";
import graph2 from "../Images/graph2.png";
import Navbar from "./Navbar";

function AdminPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-700 p-5 flex">
        {/* Left Div for Doctor Details */}
        <div className="flex-1 bg-gray-800 p-5 text-white md-10">
          <h2 className="text-3xl font-semibold mb-4">Doctor Details</h2>
          <div className="mb-4">
            <p>Name: John Doe</p>
            <p>Age: 35</p>
            <p>Doctor ID: DR12345</p>
          </div>
          <table className="table-auto text-white">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Prediction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Patient 1</td>
                <td className="border px-4 py-2">40</td>
                <td className="border px-4 py-2">patient1@example.com</td>
                <td className="border px-4 py-2">0.68423</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Patient 2</td>
                <td className="border px-4 py-2">45</td>
                <td className="border px-4 py-2">patient2@example.com</td>
                <td className="border px-4 py-2">0.68423</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Patient 3</td>
                <td className="border px-4 py-2">38</td>
                <td className="border px-4 py-2">patient3@example.com</td>
                <td className="border px-4 py-2">0.68423</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Div for Image */}
        <div className="flex flex-row justify-around bg-gray-800 p-5">
          <img
            src={graph1}
            alt="Graph-img1"
            className="w-auto h-64 rounded-lg pd-8"
          />
          <img
            src={graph2}
            alt="Graph-img2"
            className="w-auto h-64 rounded-lg pt-5"
          />
        </div>
      </div>
    </>
  );
}

export default AdminPage;
