import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  useNavigate,
  useLocation,
  Link,
  useLoaderData,
} from 'react-router-dom';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';

import TopBar from '@components/common/TopBar';
import TabBar from '@components/common/TabBar';
import { SeasonBackgrounds } from '@utils/image/SeasonBackgrounds';
import CollageItem from '@components/collage/CollageItem';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.69rem 0 0.5rem 0;

  span {
    color: #333;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const OptionBox = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0.69rem;

  .collage__save-button:hover {
    cursor: pointer;
  }
`;

const Select = styled.div`
  position: relative;
  /* width: 4rem; */
  /* height: 100%; */

  display: flex;
  align-items: center;

  select {
    height: 1.25rem;

    color: #333;
    border: none;
    outline: none;

    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* IE */
  select::-ms-expand {
    display: none;
  }

  img {
    width: 0.52419rem;
    height: 0.3125rem;

    margin-left: 0.25rem;
  }
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 2.5rem - 4rem - 2rem);
  padding: 0 1.88rem 3.8125rem 1.88rem;

  .collage__capture__area {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 6.1875rem;
    grid-gap: 0;
    overflow-y: scroll;
  }
`;

const CollagePage = () => {
  const { collageResponse, newNotificationResponse } = useLoaderData();

  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState(2024);
  const [now, setNow] = useState(new Date());
  const terms = Array.from({ length: 24 }, (_, i) => i + 1);

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

  const contentRef = useRef(null);

  const handleSaveImage = async () => {
    if (!contentRef.current) return;

    try {
      const div = contentRef.current;

      const originalStyle = {
        width: div.style.width,
        height: div.style.height,
      };

      div.style.width = `${div.scrollWidth}px`;
      div.style.height = `${div.scrollHeight}px`;

      const canvas = await html2canvas(div, {
        scale: 2,
        logging: false,
        windowHeight: div.scrollHeight,
        windowWidth: div.scrollWidth,
      });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'collage.png');
        }
      });

      div.style.width = originalStyle.width;
      div.style.height = originalStyle.height;
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <Layout>
      <TopBar isNewNotification={newNotificationResponse.data} />

      <Title>
        <span>나의 24절기</span>
      </Title>

      <OptionBox>
        <Select>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="year">{now.getFullYear().toString()}</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.0005 14.6538L7.59668 10.25H16.4043L12.0005 14.6538Z"
              fill="black"
            />
          </svg>
        </Select>
        <div className="collage__save-button" onClick={handleSaveImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 15.7884L7.7308 11.5193L8.78462 10.4347L11.25 12.9V4.5H12.7499V12.9L15.2153 10.4347L16.2692 11.5193L12 15.7884ZM6.3077 19.5C5.80257 19.5 5.375 19.325 5.025 18.975C4.675 18.625 4.5 18.1974 4.5 17.6923V14.9808H5.99997V17.6923C5.99997 17.7692 6.03202 17.8397 6.09612 17.9038C6.16024 17.9679 6.23077 18 6.3077 18H17.6922C17.7692 18 17.8397 17.9679 17.9038 17.9038C17.9679 17.8397 18 17.7692 18 17.6923V14.9808H19.5V17.6923C19.5 18.1974 19.325 18.625 18.975 18.975C18.625 19.325 18.1974 19.5 17.6922 19.5H6.3077Z"
              fill="black"
            />
          </svg>
        </div>
      </OptionBox>

      <Content>
        <div className="collage__capture__area" ref={contentRef}>
          {terms.map((term) => (
            <div key={term}>
              {collageResponse.data.some((item) => item.term === term) ? (
                <CollageItem
                  articleId={
                    collageResponse.data.find((item) => item.term === term)
                      .articleId
                  }
                  thumbnail={
                    collageResponse.data.find((item) => item.term === term)
                      .image
                  }
                />
              ) : (
                <CollageItem thumbnail={SeasonBackgrounds[term]} />
              )}
            </div>
          ))}
        </div>
      </Content>

      <TabBar />
    </Layout>
  );
};

export default CollagePage;
