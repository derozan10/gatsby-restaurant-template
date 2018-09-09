import React from "react";
import { MdSearch } from 'react-icons/md';
import { MdCreate } from 'react-icons/md';
import { MdAvTimer } from 'react-icons/md';
import { MdDevices } from 'react-icons/md';

const iconStyle = {
  margin: "0 10px"
}
const IndexPage = () => (

  <div>
    <h1>Welkom op de restaurant demo-site</h1>
    <p>Deze website heeft volgende eigenschappen:</p>
    <ul style={{ listStyleType: "none" }}>
      <li><MdDevices style={iconStyle} /> Responsive design (ontwerp werd aangepast zodat de website er op alle apparaten goed uitziet)</li>
      <li><MdCreate style={iconStyle} /> Menu-kaart kan aangepast worden a.d.h.v. een erg gebruiksvriendelijk systeem</li>
      <li><MdAvTimer style={iconStyle} /> Super snelle laadtijd</li>
      <li><MdSearch style={iconStyle} /> SEO-vriendelijk</li>
    </ul>
  </div>
);

export default IndexPage;
