import * as S from './style';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import Icon from '@components/atoms/Icon';
import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';
import withNavigation from '@components/hoc/withNavigation';

import { useNavigate } from 'react-router-dom';
import useFallBackImage from '@utils/hooks/useFallBackImage';

function EditProfileTemplate({ prevUserData }) {
  const [userData, setUserData] = useState({
    ...prevUserData,
    image: { imageData: prevUserData.image },
  });
  const [warningType, setWarningType] = useState(`NO_WARNING`);
  const [warningText, setWarningText] = useState('');
  const [isValidForm, setIsValidForm] = useState({
    validId: true,
    validNickname: true,
    validForm: true,
  });
  const [isImageChanged, setIsImageChanged] = useState(false);
  const imageInputRef = useRef(null);
  const { onLoadFallBackImage } = useFallBackImage();
  const navigate = useNavigate();

  const MAX_ID_LENGTH = 20;
  const MAX_NAME_LENGTH = 10;

  const warningMessages = (warningStatus) => {
    switch (warningStatus) {
      case `INVALID_ID`:
        return `영문 소문자, 숫자, 밑줄(’_’) 및 점(’.’)으로 구성된 5글자 이상 20글자 이하의 아이디만 가능합니다.`;
      case `INVALID_NICKNAME`:
        return `영문, 한글 및 숫자로만 구성된 2글자 이상 10글자 이하의 닉네임만 가능합니다.`;
      case `REDUNDANT_ID`:
        return `중복된 아이디입니다.`;
      case `NO_WARNING`:
        return ``;
      default:
        return ``;
    }
  };

  const handleImageUpload = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];

    if (file && file.size > 10 * 1024 * 1024) {
      alert('이미지 파일 크기는 10MB를 초과할 수 없습니다.');
      event.target.value = null;
      return;
    }

    const fileName = file ? file.name : null;
    const fileExtension = fileName ? fileName.split('.').pop() : null;
    const fileType = fileName ? file.type : null;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData({
          ...userData,
          image: {
            imageName: fileName,
            imageExtension: fileExtension,
            imageType: fileType,
            imageData: e.target.result,
          },
        });
      };
      reader.readAsDataURL(file);

      setIsImageChanged(true);
    }
  };

  const onChangeId = (event) => {
    const newId = event.target.value.trim().slice(0, MAX_ID_LENGTH);
    setWarningType(`NO_WARNING`);
    setWarningText(``);
    setUserData({ ...userData, accountId: newId });

    if (newId === prevUserData.accountId) {
      setIsValidForm({ ...isValidForm, validId: true });
      return;
    }

    const regex = /^(?=[a-z0-9._]{5,20}$)(?!.*[.]{2})[^.].*[^.]$/;
    if (regex.test(newId)) {
      setIsValidForm({ ...isValidForm, validId: true });
    } else {
      setIsValidForm({ ...isValidForm, validId: false });
    }
  };

  const onChangeName = (event) => {
    const newName = event.target.value.trim().slice(0, MAX_NAME_LENGTH);
    setWarningType(`NO_WARNING`);
    setWarningText(``);
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

  useEffect(() => {
    if (isValidForm.validId && isValidForm.validNickname) {
      setIsValidForm({ ...isValidForm, validForm: true });
    } else if (!isValidForm.validId) {
      setIsValidForm({ ...isValidForm, validForm: false });
      setWarningType(`INVALID_ID`);
      setWarningText(warningMessages(`INVALID_ID`));
    } else {
      setIsValidForm({ ...isValidForm, validForm: false });
      setWarningType(`INVALID_NICKNAME`);
      setWarningText(warningMessages(`INVALID_NICKNAME`));
    }
  }, [userData]);

  const onClickSubmit = async () => {
    if (!isValidForm.validForm) {
      alert('올바르지 않은 프로필 수정 내용입니다. 다시 한번 체크해 주세요.');
      return;
    }

    const accessToken = localStorage.getItem('accessToken');

    try {
      if (userData.accountId !== prevUserData.accountId) {
        const uniqueIdResponse = await axios({
          method: 'GET',
          url: `/api/user/check-account-id?id=${userData.accountId}`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }
      console.log('사용 가능한 아이디입니다.');
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 403:
            alert('인증 오류가 발생했습니다. 로그인 정보를 확인해주세요.');
            navigate(`/login`);
            break;
          case 409:
            setWarningType(`REDUNDANT_ID`);
            setWarningText(warningMessages(`REDUNDANT_ID`));
            setIsValidForm({ ...isValidForm, validForm: false });
            console.log(
              '이미 사용 중인 아이디입니다. 다른 아이디를 시도해주세요.'
            );
            break;
          default:
            console.error('Error:', error);
        }
      }
      return;
    }

    try {
      const formData = new FormData();

      if (isImageChanged) {
        /* 1. 프로필 이미지가 새로 업데이트된 경우 */
        const base64Data = userData.image.imageData.split(',')[1];
        const imageBlob = base64ToBlob(base64Data, userData.image.imageType);
        formData.append(
          `image`,
          imageBlob,
          `profile.${userData.image.imageExtension}`
        );
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

  function base64ToBlob(base64, mimeType) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }

  return (
    <S.Layout>
      <S.ProfileContainer onClick={handleImageUpload}>
        <Image
          src={userData.image.imageData}
          width="5.625"
          height="5.625"
          circle
          onError={onLoadFallBackImage}
        />
        <Icon
          type="camera"
          width="1.25"
          height="1.25"
          style={{ position: 'absolute', right: '0', bottom: '0.75rem' }}
        />
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={handleImageChange}
        />
      </S.ProfileContainer>

      <S.FormContainer>
        <S.InputContainer
          isValid={
            warningType !== `INVALID_ID` && warningType !== `REDUNDANT_ID`
          }
        >
          <h2>아이디</h2>
          <section>
            <input
              type="text"
              onChange={onChangeId}
              placeholder={prevUserData.accountId}
              value={userData.accountId}
            />
          </section>
          <div className="mypage__edit__line" />
          <S.Warning>
            {warningType === `INVALID_ID` || warningType === `REDUNDANT_ID`
              ? warningText
              : ''}
          </S.Warning>
        </S.InputContainer>

        <S.InputContainer isValid={warningType !== `INVALID_NICKNAME`}>
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
          <S.Warning>
            {warningType === `INVALID_NICKNAME` ? warningText : ''}
          </S.Warning>
        </S.InputContainer>
      </S.FormContainer>

      <S.ConfirmButton
        isValidForm={isValidForm.validForm}
        onClick={onClickSubmit}
      >
        <Text size="1.25" color="#fff">
          확인
        </Text>
      </S.ConfirmButton>
    </S.Layout>
  );
}

export default withNavigation(
  '프로필 수정',
  EditProfileTemplate,
  <Text color="#888">취소</Text>
);
