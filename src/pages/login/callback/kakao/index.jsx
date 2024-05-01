import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FadeLoader from 'react-spinners/FadeLoader';

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CallBackPage = () => {
  const authorizeCode = new URL(window.location.href).searchParams.get('code');
  const backendUrl = '/api/oauth/login/kakao';
  const navigate = useNavigate();

  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: 'GET',
        url: `${backendUrl}?code=${authorizeCode}`,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }).then((res) => {
        localStorage.setItem('accessToken', res.data.tokenInfo.accessToken);
        localStorage.setItem('refreshToken', res.data.tokenInfo.refreshToken);

        if (res.data.firstLogin) {
          navigate('/mypage/edit');
        } else {
          navigate('/home');
        }
      });
    };
    kakaoLogin();
  }, []);

  return (
    <Layout>
      <FadeLoader color="#333333" width={6} height={16} radius={1} />
    </Layout>
  );
};

export default CallBackPage;
