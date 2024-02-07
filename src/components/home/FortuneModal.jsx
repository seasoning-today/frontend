import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalOverlay = styled.div`
  position: relative;
  width: 17.6875rem;

  display: flex;
  flex-direction: column;
  padding: 1.63rem 1.38rem 1.69rem;

  border-radius: 1.25rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  z-index: 1000;
`;

const ModalTop = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    padding-top: 0.2rem;

    color: #8e8c86;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }

  svg {
    cursor: pointer;
  }
`;

const ModalTitle = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  padding: 0.5rem 0;

  color: #333;
  font-family: 'Apple SD Gothic Neo';
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Hr = styled.div`
  position: relative;
  width: 100%;
  height: 0.03125rem;

  display: flex;
  margin-bottom: 1.06rem;

  background-color: #8e8c86;
`;

const ModalContent = styled.div`
  width: 100%;

  color: #333;
  text-align: justify;
  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FortuneModal = ({ now, setShowModal, fortuneText }) => {
  return (
    <ModalBackground>
      <ModalOverlay>
        <ModalTop>
          <span>{`${now.getMonth() + 1}월 ${now.getDate()}일`}</span>
          <svg
            onClick={() => {
              setShowModal(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.40002 18.6538L5.34619 17.6L10.9462 12L5.34619 6.40002L6.40002 5.34619L12 10.9462L17.6 5.34619L18.6538 6.40002L13.0538 12L18.6538 17.6L17.6 18.6538L12 13.0538L6.40002 18.6538Z"
              fill="black"
            />
          </svg>
        </ModalTop>
        <ModalTitle>오늘의 운세</ModalTitle>
        <Hr />
        <ModalContent>{fortuneText}</ModalContent>
      </ModalOverlay>
    </ModalBackground>
  );
};

export default FortuneModal;
