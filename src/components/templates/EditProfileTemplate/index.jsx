import * as S from './style';

import Icon from '@components/atoms/Icon';
import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';
import withNavigation from '@components/hoc/withNavigation';

import { EditProfileContext } from '@contexts/EditProfileContext';
import { useContext } from 'react';
import useFallBackImage from '@utils/hooks/useFallBackImage';

function EditProfileTemplate() {
  const {
    userData,
    warningType,
    warningText,
    isValidForm,
    imageInputRef,
    handleImageUpload,
    handleImageChange,
    handleChangeId,
    handleChangeName,
    handleClickSubmit,
  } = useContext(EditProfileContext);
  const { onLoadFallBackImage } = useFallBackImage();

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
              onChange={handleChangeId}
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
              onChange={handleChangeName}
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
        onClick={handleClickSubmit}
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
