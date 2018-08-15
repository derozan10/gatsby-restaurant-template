import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.div`
  /* height: 200px; */
  /* width: 150px; */
  img {
    border-radius: 3px;
    &:hover {
      box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.2);
    }
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
