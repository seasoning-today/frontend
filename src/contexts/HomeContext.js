import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const HomeContext = createContext();

export function useHomeContext(loaderData) {
  const { homeData, termData, newNotificationData } = loaderData;

  const displayTerm =
    termData.recordable === true
      ? termData.recordTerm.sequence
      : termData.currentTerm.sequence;

  /* 공통 */
  const location = useLocation();
  const navigate = useNavigate();
  /* 운세 모달 */
  const [fortuneText, setFortuneText] = useState('');
  const [showModal, setShowModal] = useState(false);
  /* 채널 친구 추가 팝업 */
  const isShownKakaoFriendsPopup = localStorage.getItem(
    'isShownKakaoFriendsPopup'
  );
  /* 홈 */
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category')
    ? searchParams.get('category')
    : 'year'; // 'year' | 'term'
  const currentDate = new Date();
  /* 절기별 보기 */
  const selectedTerm =
    searchParams.get('term') === null ? 0 : searchParams.get('term');

  /* 이벤트 처리 */
  const handleClickPopup = () => {
    window.open('https://pf.kakao.com/_GbxmxmG/friend', '_blank');
  };

  const handleClosePopup = () => {
    localStorage.setItem('isShownKakaoFriendsPopup', true);
    navigate('/', { replace: true });
  };

  const handleCategoryChange = (event) => {
    const changedCategory = event.target.value;
    navigate(`/home?category=${changedCategory}`);
  };

  useEffect(() => {
    const fetchTodayFortune = async () => {
      const accessToken = localStorage.getItem('accessToken');

      await axios({
        method: 'GET',
        url: `/api/today-fortune`,
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then((res) => {
        setFortuneText(res.data);
      });
    };

    fetchTodayFortune();
  }, []);

  const getStatusData = (term) => {
    if (homeData.find((item) => item.term === term)) {
      if (termData.recordable && termData.recordTerm.sequence === term) {
        return {
          status: `written-countdown`,
          articleId: homeData.find((item) => item.term === term).id,
          dueDate: termData.recordTerm?.date + 'T23:59:59+09:00',
        };
      } else {
        return {
          status: `written`,
          articleId: homeData.find((item) => item.term === term).id,
        };
      }
    } else if (termData.recordable && termData.recordTerm.sequence === term) {
      return {
        status: `countdown`,
        dueDate: termData.recordTerm?.date + 'T23:59:59+09:00',
      };
    } else if (termData.currentTerm.sequence < term) {
      return { status: `deactivated` };
    } else {
      return { status: `open` };
    }
  };

  return {
    isNewNotification: newNotificationData,
    currentDate,
    homeData,
    termData,
    displayTerm,
    selectedTerm,
    category,
    fortuneText,
    showModal,
    isShownKakaoFriendsPopup,
    setShowModal,
    handleClickPopup,
    handleClosePopup,
    handleCategoryChange,
    getStatusData,
  };
}
