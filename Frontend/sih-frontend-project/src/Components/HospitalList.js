import React from "react";

const HospitalList = ({ nearbyHospitals }) => {
  return (
    <div className="hospital-list">
      <h2>Nearby Hospitals</h2>
      <ul>
        {nearbyHospitals.map((hospital) => (
          <li key={hospital.place_id}>{hospital.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;
