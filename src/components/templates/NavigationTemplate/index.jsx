import React from 'react';
import styled from 'styled-components';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

import Text from '@components/atoms/Text';
import Row from '@components/atoms/Row';
import Column from '@components/atoms/Column';
import TabBar from '@components/common/TabBar';

export default function MypageTemplate() {
  const { userData } = useLoaderData();
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.clear();
    navigate(`/login`);
  };

  return (
    <Layout>
      <ProfileBox>
        <Column style={{ alignItems: 'flex-start', rowGap: '0.25rem' }}>
          <Text style={{ fontSize: '1.25rem', fontWeight: 600 }}>
            {userData.nickname}
          </Text>
          <Text>{`@${userData.accountId}`}</Text>
        </Column>

        <img src={userData.image} />
      </ProfileBox>

      <section>
        <MenuBox>
          <LinkMenu to={`/mypage/edit`}>
            <span>프로필 수정</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.9462 11.9995L8.34619 7.39953L9.40002 6.3457L15.0538 11.9995L9.40002 17.6534L8.34619 16.5995L12.9462 11.9995Z"
                fill="#BFBFBF"
              />
            </svg>
          </LinkMenu>
          <div className="mypage__line" />
          <LinkMenu to={`/mypage/account`}>
            <span>계정 설정</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.9462 11.9995L8.34619 7.39953L9.40002 6.3457L15.0538 11.9995L9.40002 17.6534L8.34619 16.5995L12.9462 11.9995Z"
                fill="#BFBFBF"
              />
            </svg>
          </LinkMenu>
        </MenuBox>
      </section>

      <section>
        <MenuBox>
          <LinkMenu to={`/notice`}>
            <span>공지사항</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.9462 11.9995L8.34619 7.39953L9.40002 6.3457L15.0538 11.9995L9.40002 17.6534L8.34619 16.5995L12.9462 11.9995Z"
                fill="#BFBFBF"
              />
            </svg>
          </LinkMenu>
        </MenuBox>
      </section>

      <section>
        <MenuBox>
          <ActionMenu onClick={onClickLogout}>
            <span className="important__menu">로그아웃</span>
          </ActionMenu>
        </MenuBox>
      </section>

      <TabBar />
    </Layout>
  );
}
