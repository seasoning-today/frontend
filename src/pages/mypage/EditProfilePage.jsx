import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;

const Header = styled.header`
  width: 100%;
  padding: 3.56rem 0;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4.12rem;

  .mypage__edit__title {
    color: #000;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ProfileBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  .profile-center {
    position: relative;
    width: 5.625rem;
    height: 5.625rem;

    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    background-color: #d9d9d9;
  }

  .profile-icon {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  input {
    display: none;
  }
`;

const InfoBox = styled.div`
  width: 100%;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.69rem;
  padding: 2.69rem 0;
`;

const InputBox = styled.div`
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
    height: 2.75rem;

    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
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

    background-color: #8e8c86;
  }
`;

const CheckIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 0.5rem;

  cursor: pointer;

  svg path {
    fill: ${(props) => (props.isValid ? '#28a745' : '#c7c5c3')};
  }
`;

const Warning = styled.span`
  margin-top: 0.44rem;

  color: #ea0000;
  font-family: 'Apple SD Gothic Neo';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 134%;

  opacity: ${({ isValid }) => (isValid ? `0` : `1`)};

  transition: opacity 0.2s ease-in-out;
`;

const ConfirmButton = styled.div`
  width: 100%;
  height: 3.75rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #004a22;
  opacity: ${(props) => (props.isValidForm ? 1 : 0.25)};

  transition: opacity 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  span {
    color: #fff;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 134%;
  }
`;

const EditProfilePage = () => {
  const prevUserData = useLoaderData().userData;
  const [userData, setUserData] = useState(prevUserData);
  const [isImageChanged, setIsImageChanged] = useState(false);
  const [isValidForm, setIsValidForm] = useState({
    uniqueId: true,
    validId: true,
    validNickname: true,
    validForm: true,
  });
  const imageInputRef = useRef(null);
  const navigate = useNavigate();

  const MAX_ID_LENGTH = 20;
  const MAX_NAME_LENGTH = 10;

  const handleImageUpload = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData({ ...userData, profileImageUrl: e.target.result });
      };
      reader.readAsDataURL(file);

      setIsImageChanged(true);
    }
  };

  const onChangeId = (event) => {
    const newId = event.target.value.trim().slice(0, MAX_ID_LENGTH);
    setUserData({ ...userData, accountId: newId });

    if (newId === prevUserData.accountId) {
      setIsValidForm({ ...isValidForm, validId: true, uniqueId: true });
      return;
    }

    const regex = /^(?=[a-z0-9._]{5,20}$)(?!.*[.]{2})[^.].*[^.]$/;
    if (regex.test(newId)) {
      setIsValidForm({ ...isValidForm, validId: true, uniqueId: false });
    } else {
      setIsValidForm({ ...isValidForm, validId: false, uniqueId: false });
    }
  };

  const onCheckUniqueId = async () => {
    if (isValidForm.uniqueId) {
      return;
    }

    try {
      const accessToken = localStorage.getItem('accessToken');
      const getResponse = await axios({
        method: 'GET',
        url: `/api/user/check-account-id?id=${userData.accountId}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setIsValidForm({ ...isValidForm, uniqueId: true });
      alert('사용 가능한 아이디입니다.');
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 403:
            alert('인증 오류가 발생했습니다. 로그인 정보를 확인해주세요.');
            break;
          case 409:
            alert('이미 사용 중인 아이디입니다. 다른 아이디를 시도해주세요.');
            break;
          default:
            console.error('Error:', error);
            alert('오류가 발생했습니다. 나중에 다시 시도해주세요.');
        }
      }
    }
  };

  const onChangeName = (event) => {
    const newName = event.target.value.trim().slice(0, MAX_NAME_LENGTH);
    setUserData({ ...userData, nickname: newName });

    if (newName === prevUserData.nickname) {
      setIsValidForm({ ...isValidForm, validNickname: true });
      return;
    }

    const regex = /^[\w가-힣]{2,10}$/;
    if (regex.test(newName)) {
      setIsValidForm({ ...isValidForm, validNickname: true });
    } else {
      setIsValidForm({ ...isValidForm, validNickname: false });
    }
  };

  const onClickSubmit = async () => {
    if (!isValidForm.validForm) {
      alert('올바르지 않은 프로필 수정 내용입니다. 다시 한번 체크해 주세요.');
      return;
    }

    try {
      const accessToken = localStorage.getItem('accessToken');
      const formData = new FormData();

      if (isImageChanged) {
        /* 1. 프로필 이미지가 새로 업데이트된 경우 */
        const imageResponse = await fetch(userData.profileImageUrl);
        const imageBlob = await imageResponse.blob();
        formData.append('image', imageBlob);
      } else {
        /* 2. 프로필 이미지가 수정되지 않은 경우 */
        const emptyImageJSON = JSON.stringify({
          image: null,
        });
        const emptyImageBlob = new Blob([emptyImageJSON], {
          type: 'application/json',
        });
        formData.append('image', emptyImageBlob);
      }

      const formJson = JSON.stringify({
        image_modified: isImageChanged,
        accountId: userData.accountId,
        nickname: userData.nickname,
      });

      const formBlob = new Blob([formJson], { type: 'application/json' });
      formData.append('request', formBlob);

      const putResponse = await axios({
        method: 'PUT',
        url: `/api/user/profile`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      navigate(`/mypage`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (
      isValidForm.validId &&
      isValidForm.uniqueId &&
      isValidForm.validNickname
    ) {
      setIsValidForm({ ...isValidForm, validForm: true });
    } else {
      setIsValidForm({ ...isValidForm, validForm: false });
    }
  }, [
    isValidForm.validId,
    isValidForm.uniqueId,
    isValidForm.validNickname,
    isValidForm.validForm,
  ]);

  return (
    <Layout>
      <Header>
        <span className="mypage__edit__title">프로필 수정</span>

        <ProfileBox>
          <div className="profile-center" onClick={handleImageUpload}>
            <img src={userData.image} />
            <div className="profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="10" fill="white" />
                <path
                  d="M14.6154 5.38462H13.0162L12.2298 4.20538C12.1877 4.14224 12.1306 4.09046 12.0637 4.05464C11.9968 4.01881 11.9221 4.00005 11.8462 4H8.15385C8.07794 4.00005 8.00321 4.01881 7.93629 4.05464C7.86937 4.09046 7.81232 4.14224 7.77019 4.20538L6.98327 5.38462H5.38462C5.01739 5.38462 4.66521 5.53049 4.40554 5.79016C4.14588 6.04983 4 6.40201 4 6.76923V13.2308C4 13.598 4.14588 13.9502 4.40554 14.2098C4.66521 14.4695 5.01739 14.6154 5.38462 14.6154H14.6154C14.9826 14.6154 15.3348 14.4695 15.5945 14.2098C15.8541 13.9502 16 13.598 16 13.2308V6.76923C16 6.40201 15.8541 6.04983 15.5945 5.79016C15.3348 5.53049 14.9826 5.38462 14.6154 5.38462ZM15.0769 13.2308C15.0769 13.3532 15.0283 13.4706 14.9417 13.5571C14.8552 13.6437 14.7378 13.6923 14.6154 13.6923H5.38462C5.26221 13.6923 5.14481 13.6437 5.05826 13.5571C4.9717 13.4706 4.92308 13.3532 4.92308 13.2308V6.76923C4.92308 6.64682 4.9717 6.52943 5.05826 6.44287C5.14481 6.35632 5.26221 6.30769 5.38462 6.30769H7.23077C7.30677 6.30774 7.38161 6.28902 7.44864 6.25319C7.51567 6.21736 7.57282 6.16553 7.615 6.10231L8.40077 4.92308H11.5987L12.385 6.10231C12.4272 6.16553 12.4843 6.21736 12.5514 6.25319C12.6184 6.28902 12.6932 6.30774 12.7692 6.30769H14.6154C14.7378 6.30769 14.8552 6.35632 14.9417 6.44287C15.0283 6.52943 15.0769 6.64682 15.0769 6.76923V13.2308ZM10 7.23077C9.49794 7.23077 9.00715 7.37965 8.58971 7.65858C8.17226 7.93751 7.8469 8.33396 7.65477 8.7978C7.46264 9.26165 7.41237 9.77205 7.51031 10.2645C7.60826 10.7569 7.85003 11.2092 8.20504 11.5642C8.56005 11.9192 9.01236 12.161 9.50477 12.2589C9.99718 12.3569 10.5076 12.3066 10.9714 12.1145C11.4353 11.9223 11.8317 11.597 12.1107 11.1795C12.3896 10.7621 12.5385 10.2713 12.5385 9.76923C12.5377 9.09622 12.27 8.451 11.7941 7.97511C11.3182 7.49922 10.673 7.23153 10 7.23077ZM10 11.3846C9.68051 11.3846 9.36819 11.2899 9.10254 11.1124C8.83689 10.9349 8.62984 10.6826 8.50758 10.3874C8.38531 10.0922 8.35332 9.76744 8.41565 9.45409C8.47798 9.14073 8.63183 8.8529 8.85775 8.62698C9.08367 8.40107 9.3715 8.24722 9.68485 8.18489C9.99821 8.12256 10.323 8.15455 10.6182 8.27681C10.9134 8.39908 11.1656 8.60612 11.3431 8.87177C11.5206 9.13742 11.6154 9.44974 11.6154 9.76923C11.6154 10.1977 11.4452 10.6085 11.1422 10.9115C10.8393 11.2144 10.4284 11.3846 10 11.3846Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={imageInputRef}
              onChange={handleImageChange}
            />
          </div>
        </ProfileBox>
      </Header>

      <InfoBox>
        <InputBox>
          <h2>아이디</h2>
          <section>
            <input
              type="text"
              onChange={onChangeId}
              placeholder={prevUserData.accountId}
              value={userData.accountId}
            />
            <CheckIcon isValid={isValidForm.uniqueId} onClick={onCheckUniqueId}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.00015 16.1698L5.53015 12.6998C5.34317 12.5129 5.08957 12.4078 4.82515 12.4078C4.56072 12.4078 4.30712 12.5129 4.12015 12.6998C3.93317 12.8868 3.82813 13.1404 3.82812 13.4048C3.82813 13.5358 3.85391 13.6654 3.90402 13.7864C3.95412 13.9073 4.02756 14.0173 4.12015 14.1098L8.30015 18.2898C8.69015 18.6798 9.32015 18.6798 9.71015 18.2898L20.2901 7.70983C20.4771 7.52286 20.5822 7.26926 20.5822 7.00483C20.5822 6.74041 20.4771 6.48681 20.2901 6.29983C20.1032 6.11286 19.8496 6.00781 19.5851 6.00781C19.3207 6.00781 19.0671 6.11286 18.8801 6.29983L9.00015 16.1698Z"
                  fill="#c7c5ce"
                />
              </svg>
            </CheckIcon>
          </section>
          <div className="mypage__edit__line" />
          <Warning isValid={isValidForm.validId}>
            띄어쓰기, 특수문자 사용 불가합니다 등등 멘트
          </Warning>
        </InputBox>

        <InputBox>
          <h2>이름</h2>
          <section>
            <input
              type="text"
              onChange={onChangeName}
              placeholder={prevUserData.nickname}
              value={userData.nickname}
            />
          </section>
          <div className="mypage__edit__line" />
        </InputBox>
      </InfoBox>

      <ConfirmButton
        isValidForm={isValidForm.validForm}
        onClick={onClickSubmit}
      >
        <span>확인</span>
      </ConfirmButton>
    </Layout>
  );
};

export default EditProfilePage;
