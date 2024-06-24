import { createContext, useContext } from 'react';
import useProfileForm from '@utils/hooks/useProfileForm';

export const EditProfileContext = createContext();

export function useEditProfileContext() {
  return useContext(EditProfileContext);
}

export function createEditProfileContext(loaderData) {
  const prevUserData = loaderData.userData;

  const { handleImageForm, handleProfileForm } = useProfileForm(prevUserData);
  const { image, imageInputRef, handleImageReplace, handleImageChange } =
    handleImageForm;
  const {
    userData,
    warningType,
    warningText,
    isValidForm,
    handleChangeId,
    handleChangeName,
    handleClickSubmit,
  } = handleProfileForm;

  return {
    prevNickname: prevUserData.nickname,
    prevAccountId: prevUserData.accountId,
    image,
    userData,
    warningType,
    warningText,
    isValidForm,
    imageInputRef,
    handleImageReplace,
    handleImageChange,
    handleChangeId,
    handleChangeName,
    handleClickSubmit,
  };
}
