import { useState, useEffect, createContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const CollageContext = createContext();

export function useCollageContext(loaderData) {
  const navigate = useNavigate();
  const location = useLocation();
  const { collageData, newNotificationData } = loaderData;

  const [selectedCategory, setSelectedCategory] = useState(2024);
  const [imageEnabled, setImageEnabled] = useState(true);
  const [labelEnabled, setLabelEnabled] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    navigate(`/collage?category=${newCategory}`);
  };

  const toggleImageEnabled = () =>
    setImageEnabled((imageEnabled) => !imageEnabled);

  const toggleLabelEnabled = () =>
    setLabelEnabled((labelEnabled) => !labelEnabled);

  return {
    isNewNotification: newNotificationData,
    collageData,
    selectedCategory,
    imageEnabled,
    labelEnabled,
    handleCategoryChange,
    toggleImageEnabled,
    toggleLabelEnabled,
  };
}
