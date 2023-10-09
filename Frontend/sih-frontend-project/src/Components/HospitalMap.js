import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
// import HospitalList from "./HospitalList";
import Header from "./Header";
import AppointmentForm from "./AppointmentForm";

class HospitalMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: null,
      nearbyHospitals: [],
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.setState({ currentLocation });
          this.fetchNearbyHospitals(currentLocation);
        },
        (error) => {
          console.error("Error fetching current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  fetchNearbyHospitals(currentLocation) {
    const apiKey = "AIzaSyA_i892LjXn1a7Xrwl6rc7hL54CJnVqqmU"; // Replace with your actual API key
    const radius = 5000; // Adjust the radius as needed (in meters)

    fetch(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentLocation.lat},${currentLocation.lng}&radius=${radius}&type=hospital&key=${apiKey}`,
      {
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ nearbyHospitals: data.results });
      })
      .catch((error) => {
        console.error("Error fetching nearby hospitals:", error);
      });
  }
  render() {
    const { currentLocation, nearbyHospitals } = this.state;

    return (
      <>
        <Header />
        <div className="flex">
          <div className="w-1/3 p-8 text-white">
            {/* <h2 className="text-2xl font-semibold mb-4">Appointment Form</h2> */}
            <AppointmentForm />
          </div>
          <div className="w-2/3 h-screen">
            {currentLocation ? (
              <Map
                google={this.props.google}
                zoom={14}
                style={{ width: "100%", height: "100%" }}
                initialCenter={currentLocation}
              >
                {/* ... (same as your previous code) */}
                <Marker name={"Your Location"} position={currentLocation} />
                {/* Add markers for nearby hospitals here */}
                {nearbyHospitals.map((hospital, index) => (
                  <Marker
                    key={index}
                    name={hospital.name}
                    position={{
                      lat: hospital.geometry.location.lat,
                      lng: hospital.geometry.location.lng,
                    }}
                  />
                ))}
              </Map>
            ) : (
              <p className="text-center text-gray-600 text-lg mt-8">
                Loading map...
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA_i892LjXn1a7Xrwl6rc7hL54CJnVqqmU",
})(HospitalMap);
