import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  width: auto;
  height: 6.1875rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fafafa;

  cursor: ${({ active }) => (active ? `pointer` : `default`)};
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    198deg,
    rgba(25, 90, 82, 0.15) 0%,
    rgba(2, 33, 29, 0.15) 100%
  );
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
`;

export const EmptyImage = styled.div`
  z-index: 10;

  width: 100%;
  height: 100%;

  background-color: #fafafa;
`;

export const LabelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`;
