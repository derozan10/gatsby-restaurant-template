import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import Logo from "../assets/img/restaurantLogo-brown.svg";

const StyledMap = styled.div`
  height: 30vh;
  width: 100%;
  margin: 1.45rem auto;
  border-radius: 10px;
`;
const RestaurantMapLogo = () => (
  <img src={Logo} style={{ width: "70px", height: "auto" }} alt="restaurant logo" />
);

const Map = () => (
  <StyledMap>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyA6DFuO6HH-7kYJSt3msuSc02fb_DtbN0E" }}
      defaultCenter={{ lat: 51.210308, lng: 4.451408 }}
      defaultZoom={13}
    >
      <RestaurantMapLogo lat={51.210308} lng={4.451408} />
    </GoogleMapReact>
  </StyledMap>
);

export default Map;
