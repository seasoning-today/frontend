import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3.75rem;
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 5.625rem;

  display: flex;
  justify-content: center;
  padding: 0.75rem 0;

  input {
    display: none;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.75rem;
  padding: 2.69rem 0;
`;

export const InputContainer = styled.div`
  position: relative;
  width: calc(100% - 4rem);

  display: flex;
  flex-direction: column;

  h2 {
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 134%;
  }

  section {
    position: relative;
  }

  input {
    width: 100%;
    padding: 0.5rem 0 0.25rem;

    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 134%;

    border: none;
    outline: none;
    background-color: white;
  }

  .mypage__edit__line {
    width: 100%;
    min-height: 0.0625rem;

    background-color: ${({ isValid }) => (isValid ? `#8e8c86` : `#EA0000`)};
    transition: all 0.2s ease-in-out;
  }
`;

export const Warning = styled.span`
  min-height: 1.75rem;
  margin-top: 0.44rem;

  color: #ea0000;
  font-family: 'Apple SD Gothic Neo';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 134%;
`;

export const ConfirmButton = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 26.875rem;
  height: 3.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: #004a22;
  opacity: ${(props) => (props.isValidForm ? 1 : 0.25)};
  transition: opacity 0.4s ease-in-out;
`;
