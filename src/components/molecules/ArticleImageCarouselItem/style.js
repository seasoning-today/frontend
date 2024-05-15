import styled from 'styled-components';

export const Layout = styled.li`
  position: relative;
  width: 100%;
  min-width: 100%;
  height: 100%;
  border-radius: 0.5rem;

  scroll-snap-align: center;
  background-color: yellow;

  cursor: ${({ readOnly }) => (!readOnly ? `pointer` : `default`)};

  path {
    fill: white;
    fill-opacity: 0.7;
  }
`;
