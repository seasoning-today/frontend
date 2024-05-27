import CollageTemplate from '@components/templates/CollageTemplate';

import { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const CollagePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { collageData, newNotificationData } = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState(2024);
  const [imageEnabled, setImageEnabled] = useState(true);
  const [labelEnabled, setLabelEnabled] = useState(false);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    navigate(`/collage?category=${newCategory}`);
  };

  const toggleImageEnabled = () => {
    setImageEnabled((imageEnabled) => !imageEnabled);
  };

  const toggleLabelEnabled = () => {
    setLabelEnabled((labelEnabled) => !labelEnabled);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);

  return (
    <CollageTemplate
      isNewNotification={newNotificationData}
      collageData={collageData}
      selectedCategory={selectedCategory}
      handleCategoryChange={handleCategoryChange}
      imageEnabled={imageEnabled}
      toggleImageEnabled={toggleImageEnabled}
      labelEnabled={labelEnabled}
      toggleLabelEnabled={toggleLabelEnabled}
    />
  );
};

export default CollagePage;
