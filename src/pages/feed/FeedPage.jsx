import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLoaderData, useNavigate } from 'react-router-dom';

import FeedItem from '@components/feed/FeedItem';
import TabBar from '@components/common/TabBar';
import useRefFocusEffect from '@utils/hooks/useRefFocusEffect';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 3.3125rem;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.31rem;

  background-color: #fff;

  h1 {
    margin: 0;
    padding: 0;

    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const NavBox = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 0.88rem;
`;

const ContentArea = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  padding: 1.5rem 1.31rem 5.3125rem;

  display: flex;
  flex-direction: column;
  row-gap: 1.75rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

const FeedPage = () => {
  const { initialFeedData } = useLoaderData();
  const [feedData, setFeedData] = useState(initialFeedData);
  const [lastFeedItemId, setLastFeedItemId] = useState(
    initialFeedData.length > 0 ? initialFeedData.at(-1).article.id : null
  );
  const navigate = useNavigate();

  const fetchFeedData = async () => {
    console.log(lastFeedItemId);
    if (!lastFeedItemId) return;

    const size = 10;

    try {
      const accessToken = localStorage.getItem('accessToken');
      const feedResponse = await axios.get(
        `/api/article/friends?size=${size}&lastId=${lastFeedItemId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (feedResponse.data.length === 0) {
        setLastFeedItemId(null);
      } else {
        setFeedData((feedData) => [...feedData, ...feedResponse.data]);
        setLastFeedItemId(feedResponse.data.at(-1).article.id);
      }
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 401) {
        console.log('* Unauthorized... Redirecting to /login');
        navigate(`/login`);
      } else {
        console.log('* Response Error... Redirecting to /home');
        navigate(`/home`);
      }
    }
  };
  const { focusElementRef } = useRefFocusEffect(fetchFeedData, []);

  return (
    <Layout>
      <Top>
        <h1>친구들의 24절기</h1>
        <NavBox>
          <Link to={`/feed/friends-search`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_1902_25822"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1902_25822)">
                <path
                  d="M11 9.74995C11.4859 9.74995 11.899 9.57976 12.2394 9.23938C12.5798 8.89901 12.7499 8.48588 12.7499 7.99998C12.7499 7.51408 12.5798 7.10094 12.2394 6.76058C11.899 6.42019 11.4859 6.25 11 6.25C10.5141 6.25 10.1009 6.42019 9.76058 6.76058C9.42019 7.10094 9.25 7.51408 9.25 7.99998C9.25 8.48588 9.42019 8.89901 9.76058 9.23938C10.1009 9.57976 10.5141 9.74995 11 9.74995ZM11.0096 13.75C11.6634 13.75 12.2843 13.6189 12.8721 13.3567C13.4599 13.0945 13.9794 12.7198 14.4307 12.2327C13.8794 11.907 13.3166 11.6619 12.7423 11.4971C12.1679 11.3324 11.5904 11.25 11.0096 11.25C10.3711 11.25 9.75671 11.334 9.16632 11.5019C8.57594 11.6699 8.04678 11.9134 7.57885 12.2327C8.02372 12.7198 8.54166 13.0945 9.13268 13.3567C9.72371 13.6189 10.3493 13.75 11.0096 13.75ZM20.8884 20.9519L15.9096 15.973C15.2006 16.5384 14.4448 16.9759 13.6423 17.2855C12.8397 17.5951 11.959 17.75 11 17.75C8.83716 17.75 7.00479 16.999 5.50287 15.4971C4.00096 13.9952 3.25 12.1628 3.25 9.99998C3.25 7.83716 4.00096 6.00479 5.50287 4.50288C7.00479 3.00096 8.83716 2.25 11 2.25C13.1628 2.25 14.9952 3.00096 16.4971 4.50288C17.999 6.00479 18.75 7.83716 18.75 9.99998C18.75 10.959 18.5951 11.8413 18.2855 12.6471C17.9759 13.4529 17.5384 14.2102 16.973 14.9192L21.9423 19.8885L20.8884 20.9519ZM11 16.25C12.7307 16.25 14.2051 15.641 15.4231 14.4231C16.641 13.2051 17.25 11.7307 17.25 9.99998C17.25 8.26921 16.641 6.79484 15.4231 5.57688C14.2051 4.35893 12.7307 3.74995 11 3.74995C9.26921 3.74995 7.79484 4.35893 6.57687 5.57688C5.35892 6.79484 4.74995 8.26921 4.74995 9.99998C4.74995 11.7307 5.35892 13.2051 6.57687 14.4231C7.79484 15.641 9.26921 16.25 11 16.25Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </Link>
          <Link to={`/feed/friends-list`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.935 13.8077C15.2091 13.8077 14.5914 13.5536 14.0818 13.0455C13.5722 12.5374 13.3174 11.9204 13.3174 11.1946C13.3174 10.4687 13.5714 9.85097 14.0795 9.34135C14.5876 8.83175 15.2046 8.57695 15.9305 8.57695C16.6563 8.57695 17.2741 8.831 17.7837 9.3391C18.2933 9.8472 18.5481 10.4642 18.5481 11.19C18.5481 11.9159 18.294 12.5336 17.7859 13.0433C17.2778 13.5529 16.6608 13.8077 15.935 13.8077ZM10.3174 19.423V17.9077C10.3174 17.6238 10.3863 17.3535 10.5241 17.0967C10.6619 16.8399 10.852 16.6359 11.0943 16.4846C11.8186 16.0603 12.5831 15.7388 13.3876 15.5202C14.1922 15.3016 15.0405 15.1923 15.9327 15.1923C16.8249 15.1923 17.6733 15.3016 18.4778 15.5202C19.2824 15.7388 20.0468 16.0603 20.7712 16.4846C21.0135 16.6359 21.2035 16.8399 21.3414 17.0967C21.4792 17.3535 21.5481 17.6238 21.5481 17.9077V19.423H10.3174ZM11.9096 17.7692V17.923H19.9558V17.7692C19.334 17.4166 18.6837 17.149 18.0048 16.9663C17.326 16.7836 16.6353 16.6923 15.9327 16.6923C15.2302 16.6923 14.5395 16.7836 13.8606 16.9663C13.1818 17.149 12.5314 17.4166 11.9096 17.7692ZM15.9327 12.3077C16.2417 12.3077 16.5048 12.199 16.7222 11.9817C16.9395 11.7644 17.0481 11.5013 17.0481 11.1923C17.0481 10.8833 16.9395 10.6202 16.7222 10.4029C16.5048 10.1856 16.2417 10.0769 15.9327 10.0769C15.6237 10.0769 15.3606 10.1856 15.1433 10.4029C14.926 10.6202 14.8173 10.8833 14.8173 11.1923C14.8173 11.5013 14.926 11.7644 15.1433 11.9817C15.3606 12.199 15.6237 12.3077 15.9327 12.3077ZM3.44238 13.75V12.25H10.9423V13.75H3.44238ZM3.44238 5.74995V4.25H14.9423V5.74995H3.44238ZM11.3981 9.74995H3.44238V8.25H12.1347C11.959 8.46922 11.8116 8.70223 11.6924 8.94903C11.5731 9.19581 11.475 9.46278 11.3981 9.74995Z"
                fill="black"
              />
            </svg>
          </Link>
        </NavBox>
      </Top>

      <ContentArea>
        {feedData.map((data, id) => (
          <FeedItem key={id} data={data} />
        ))}

        <div ref={focusElementRef} />
      </ContentArea>

      <TabBar />
    </Layout>
  );
};

export default FeedPage;
