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

  cursor: pointer;
`;

const AddImage = ({ image, onClick }) => {
  return (
    <>
      <Images src={image} onClick={onClick} />
    </>
  );
};

export default AddImage;
