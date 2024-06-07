import { useState, useRef } from 'react';

export default function useImageForm() {
  const [images, setImages] = useState([]);
  const [replacingImageIndex, setReplacingImageIndex] = useState(null);
  const imageInputRef = useRef(null);

  const handleImageUpload = (event) => {
    imageInputRef.current.click();
    const file = event.target.files && event.target.files[0];

    if (file && file.size > 10 * 1024 * 1024) {
      alert('이미지 파일 크기는 10MB를 초과할 수 없습니다.');
      event.target.value = null;
      return;
    }

    const fileName = file ? file.name : null;
    const fileExtension = fileName ? fileName.split('.').pop() : null;
    const fileType = fileName ? file.type : null;

    if (replacingImageIndex !== null) {
      // 첨부된 사진을 교체합니다.
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImages((images) =>
            images.map((image, index) =>
              index === replacingImageIndex
                ? {
                    imageName: fileName,
                    imageExtension: fileExtension,
                    imageType: fileType,
                    imageData: event.target.result,
                  }
                : image
            )
          );
        };
        reader.readAsDataURL(file);
        setReplacingImageIndex(null);
      }
    } else if (images.length < 2) {
      // 새로운 사진을 첨부합니다.
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImages((images) => [
            ...images,
            {
              imageName: fileName,
              imageExtension: fileExtension,
              imageType: fileType,
              imageData: event.target.result,
            },
          ]);
        };
        reader.readAsDataURL(file);
      }
    }

    event.target.value = null;
  };

  return {
    images,
    setImages,
    setReplacingImageIndex,
    handleImageUpload,
    imageInputRef,
  };
}
