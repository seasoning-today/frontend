import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  width: 100svw;
  height: auto;
  min-height: 100svh;

  display: flex;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  position: fixed;
  left: 5svw;
  width: 40svw;
  height: 100svh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo__header {
    position: relative;
    width: 75%;

    padding: 0;
    margin-top: 1.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 7.5rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  ${({ isPadSize }) => (!isPadSize ? `right: 5svw;` : ``)}

  width: 100%;
  max-width: 26.875rem;
  height: auto;
  min-height: 100svh;

  overflow-y: scroll;

  background-color: white;
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  width: 100svw;
  height: 100svh;
  z-index: -1;

  background-color: black;

  img {
    position: relative;
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;
