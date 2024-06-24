import useImageForm from '@utils/hooks/useImageForm';

export default function useProfileForm(initialUserData) {
  const { images, imageInputRef, handleImageReplace, handleImageChange } =
    useImageForm(
      [
        {
          imageName: 'prev-profile-image',
          imageExtension: undefined,
          imageType: undefined,
          imageData: initialUserData.image,
        },
      ],
      1
    );

  const handleProfileImageReplace = () => {
    handleImageReplace(0);
  };

  return {
    handleImageForm: {
      image: images[0],
      imageInputRef,
      handleImageReplace: handleProfileImageReplace,
      handleImageChange,
    },
  };
}
