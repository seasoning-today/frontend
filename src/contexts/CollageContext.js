import { useState, useEffect, createContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useToggleState from '@utils/hooks/useToggleState';

export const CollageContext = createContext();

export function useCollageContext(loaderData) {
  const navigate = useNavigate();
  const location = useLocation();
  const { collageData, newNotificationData } = loaderData;

  const [selectedCategory, setSelectedCategory] = useState(2024);
  const [imageEnabled, toggleImageEnabled] = useToggleState(true);
  const [labelEnabled, toggleLabelEnabled] = useToggleState(false);

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
    navigate(`/collage?category=${newCategory}`, { replace: true });
  };

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
