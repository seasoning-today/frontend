import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  max-width: calc(100% - 6rem);

  display: flex;
  flex-direction: column;
  row-gap: 1.69rem;
  padding: 2.5rem 2.37rem 1.87rem;

  border-radius: 0.625rem;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  z-index: 1000;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  width: 5.75rem;
  height: 2.1875rem;
  flex-shrink: 0;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: ${(props) => (props.warning ? `#C23952` : `#EAEAEA`)};
`;
