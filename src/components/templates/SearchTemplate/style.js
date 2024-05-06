import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.62rem;
`;

export const SearchContainer = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 26.875rem;
  height: 3.62rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.62rem;

  z-index: 50;
  background-color: #fff;
`;

export const SearchWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  padding: 0.62rem 1.37rem 0 1.13rem;
`;

export const SearchField = styled.input`
  position: relative;

  width: 100%;
  height: 2.375rem;
  border-radius: 0.625rem;
  padding: 0.5rem 1.13rem 0.5rem;

  border: none;
  outline: none;
  background-color: #f7f7f7;

  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;

  &::placeholder {
    color: #8e8c86;
  }
`;

export const SearchResultContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

export const SearchResult = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
