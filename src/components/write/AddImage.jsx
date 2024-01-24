import React from 'react';
import styled from 'styled-components';

const ImagesContainer = styled.div`
  display: flex;

  overflow-x: auto;
  gap: 1rem;
`;

const Images = styled.img`
  width: 100%;
  height: 16.3125rem;
  object-fit: cover;
  border-radius: 0.5rem;
  background-color: #ccc;
`;

const AddImage = ({ image }) => {
  return (
    <>
      <Images src={image} />
    </>
  );
};

export default AddImage;
