import React from "react";
import pencil from "../assets/img/baseline-create-24px.svg";
import speed from "../assets/img/baseline-av_timer-24px.svg";
import devices from "../assets/img/baseline-devices-24px.svg";
import search from "../assets/img/baseline-search-24px.svg";

const iconStyle = {
  margin: "0 10px",
  fillColor: "red"
}

const IndexPage = () => (
  <div>
    <h1>Welkom op de restaurant demo-site</h1>
    <p>Deze website heeft volgende eigenschappen:</p>
    <ul style={{ listStyleType: "none" }}>
      <li><img src={devices} style={iconStyle} alt="devices" /> Responsive design (ontwerp werd aangepast zodat de website er op alle apparaten goed uitziet)</li>
      <li><img src={pencil} style={iconStyle} alt="pencil" /> Menu-kaart kan aangepast worden a.d.h.v. een erg gebruiksvriendelijk systeem</li>
      <li><img src={speed} style={iconStyle} alt="speed" /> Super snelle laadtijd</li>
      <li><img src={search} style={iconStyle} alt="search" /> SEO-vriendelijk</li>
      {/* <li><img src={penicl} alt="pencil" /></li> */}
    </ul>
  </div>
);

export default IndexPage;
