import React from "react";
import styled from "styled-components";
import Map from "../components/Map";

const StyledContact = styled.div`
  .contactFlex {
    display: flex;
    justify-content: space-around;
    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContact>
      <div className="contactFlex">
        <div>
          <h2>Openingsuren</h2>
          <p>Maandag tot Vrijdag: 12u - 14u / 17u - 20u</p>
          <p>Zaterdag en Zondag: 17u - 20u</p>
          <p>Woensdag gesloten</p>
        </div>
        <div>
          <h2>Contacteer ons</h2>
          <p>Tel:03 522 34 34</p>
          <p>info@Cocotte.be</p>
          <p>Jagerstraat 21, 2050 Antwerpen</p>
        </div>
      </div>

      <Map />
    </StyledContact>
  );
};

export default Contact;
