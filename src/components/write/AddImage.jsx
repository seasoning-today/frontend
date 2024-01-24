import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Images = styled.img`
  width: 100%;
  height: 16.3125rem;
  object-fit: cover;
  border-radius: 0.5rem;
  background-color: #ccc;
`;

const AddImage = () => {
  return (
    <>
      <Images
        src={`https://i.pinimg.com/564x/21/b0/97/21b097d07816bf7a57e94d69cb0daed4.jpg`}
      />
    </>
  );
};

export default AddImage;
