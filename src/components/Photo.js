import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.div`
  img {
     box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`;

const Photo = ({ src, alt }) => {
  return (
    <StyledPhoto>
      <img src={src} alt={alt} />
    </StyledPhoto>
  );
};

export default Photo;
