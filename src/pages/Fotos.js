import React from "react";
import styled from "styled-components";
import Photo from "../components/Photo";

const StyledPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 576px) {
    justify-content: center;
  }
  .photo{
    box-shadow: 4px 4px 4px rgba(0, 0 ,0, 0.2)
  }
`;

const Fotos = ({ data }) => {
  const photos = data.allContentfulAsset.edges.map(foto => (
    <Photo key={foto.node.title} src={foto.node.resize.src} alt={foto.node.title} />
  ));

  return (
    <div className="container">
      <h1>Foto&apos;s</h1>
      <StyledPhotos>{photos}</StyledPhotos>
    </div>
  );
};

export default Fotos;

export const PhotoQuery = graphql`
  query PhotoQuery {
    allContentfulAsset {
      edges {
        node {
          title
          resize(width: 300) {
            src
          }
        }
      }
    }
  }
`;
