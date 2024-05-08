import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding-top: calc(3.125rem + 6.69rem);
  padding-bottom: 3.8125rem;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 3.125rem;

  width: 100%;
  max-width: 26.875rem;
  height: 6.69rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 0.25rem;
  padding-bottom: 0.62rem;

  z-index: 50;
  background-color: #fff;
`;

export const TitleWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 2rem;

  svg {
    cursor: pointer;
  }
`;

export const SelectContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  select {
    height: 1.5rem;

    padding: 0 1.5rem 0 0.38rem;

    color: #333;
    border: none;
    outline: none;

    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const ToggleContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 0.7rem;

  .toggle-item {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }
`;

export const CollageContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 6.1875rem;
  grid-gap: 0;
  padding: 0 1.88rem;
`;
