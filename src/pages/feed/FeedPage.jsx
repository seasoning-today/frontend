import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { /*useLoaderData,*/ useNavigate, useLocation } from 'react-router-dom';

const Top = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  align-items: center;

  width: 24.375rem;
  height: 3.3125rem;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  background: lightcoral;

  color: #333;
  font-family: AppleSDGothicNeoEB00;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FeedBorder = styled.div`
  position: relative;
  margin: 1.5rem auto;
  overflow-x: hidden;
  overflow-y: auto;

  width: 24rem;
  height: 39.5rem;
  //border: 1px solid #000;

  font-family: AppleSDGothicNeoR00;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  color: black;
`;

const ContentBorder = styled.div`
  position: relative;
  margin: 1.5rem auto;
  overflow-x: hidden;
  overflow-y: auto;

  width: 23.5rem;
  height: 24rem;
  // border: 1px solid red;

  font-family: AppleSDGothicNeoR00;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  color: black;
`;

const ProfileBorder = styled.div`
  position: relative;
  display: flex;
  margin: 0.2rem auto;
  flex-direction: row;
  align-items: center;

  width: 23rem;
  height: 3.5rem;
  //border: 1px solid blue;
`;

const ProfilePic = styled.div`
  position: relative;
  margin-left: 0.5rem;

  width: 3rem;
  height: 3rem;
  background: #d9d9d9;
  border-radius: 3rem;
`;

const PersonalData = styled.div`
  position: relative;
  margin: 1rem;
  text-align: left;

  font-family: AppleSDGothicNeoEB00;
  font-style: normal;
  font-weight: 400;
  color: #333;
`;

const Season = styled.div`
  position: fixed;
  margin-left: 17rem;

  font-family: Noto Serif KR;
  font-style: normal;
  font-weight: 700;
`;

const Pic = styled.div`
  position: relative;
  margin: 0.3rem auto;

  width: 22.75rem;
  height: 15rem;
  background: #d9d9d9;
`;

const FeedContent = styled.div`
  position: relative;
  margin: 0.4rem auto;

  width: 21.75rem;
  height: 3.375rem;

  font-family: AppleSDGothicNeoR00;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  color: #333;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const data = [
  {
    profile: {
      nickname: '이세민',
      accountId: 'devvra1n',
      image: '',
    },
    article: {
      id: 'devvra1n',
      year: 2023,
      term: 1,
      preview:
        '야~~~~~~~~~~~개짖는소리좀안나게해라 으으아악 야~~~!!~~~~~~~~개짖는소리좀안나게해라야~~~~~~~~~~~개짖는소리좀안나게해라야~~~~~~~~~~~개짖는소리좀안나게해라야~~~~~~~~~~~개짖는소리좀안나게해라야~~~~~~~~~~~개짖는소리좀안나게해라',
      image: '',
    },
  },
  {
    profile: {
      nickname: '최어진',
      accountId: 'poodlepoodle',
      image: 'String',
    },
    article: {
      id: 'poodlepoodle',
      year: 2023,
      term: 1,
      preview:
        '하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 ',
      image: 'String',
    },
  },
];

const FeedPage = () => {
  // const { response } = useLoaderData();
  // console.log(response);

  return (
    <>
      <Top>
        <div style={{ marginLeft: '1rem', cursor: 'pointer' }}>
          친구들의 24절기
        </div>
        <Link to={`/feed/friends-list`}>
          <svg
            style={{ marginRight: '1rem' }}
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
      </Top>
      <FeedBorder>
        <ContentBorder>
          <ProfileBorder>
            <ProfilePic>{data[0].profile.image}</ProfilePic>
            <PersonalData>
              <span style={{ fontSize: '0.875rem', color: '#333' }}>
                {data[0].profile.nickname}
              </span>
              <br />
              <span style={{ fontSize: '0.75rem', color: '#C3C3C3' }}>
                {data[0].profile.accountId}
              </span>
            </PersonalData>
            <Season>
              <span style={{ fontSize: '0.75rem', color: '#BFBFBF' }}>
                입춘
              </span>
              <span style={{ fontSize: '1.625rem', color: '#333' }}>立春</span>
            </Season>
          </ProfileBorder>
          <Pic>{data[0].article.image}</Pic>
          <FeedContent>{data[1].article.preview}</FeedContent>
        </ContentBorder>
      </FeedBorder>
    </>
  );
};

export default FeedPage;
