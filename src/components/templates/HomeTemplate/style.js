import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ category }) =>
    category === 'term'
      ? 'calc(3.125rem + 10.75rem + 3rem)'
      : 'calc(3.125rem + 10.75rem)'};
  padding-bottom: 3.8125rem;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 3.125rem;
  z-index: 50;

  width: 100%;
  max-width: 26.875rem;
  height: ${({ category }) =>
    category === 'term' ? 'calc(10.75rem + 3rem)' : '10.75rem'};

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 3.5625rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  column-gap: 0.5rem;
  padding: 0 1.25rem;
`;

export const FortuneContainer = styled.div`
  width: 100%;
  height: 2.75rem;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0.2rem 1.25rem 0;
`;

export const FortuneButton = styled.div`
  width: 100%;
  height: 2rem;
  border-radius: 1.125rem 1rem 1rem 1.125rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);

  .fortune-title {
    height: 100%;

    display: flex;
    align-items: center;
    column-gap: 0.32rem;
  }
`;

export const OptionContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  justify-content: space-between;
  align-content: flex-end;
  padding: 1.87rem 1.25rem 0;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;

  select {
    border: none;
    outline: none;

    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-weight: 400;

    z-index: 12;
  }
`;

export const SeasonMenuContainer = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: flex-start;
  padding: 0 1.25rem;
  gap: 0.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;
