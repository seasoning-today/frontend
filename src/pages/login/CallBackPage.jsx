import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CallBackPage = () => {
  const authorizeCode = new URL(window.location.href).searchParams.get('code');
  const backendUrl = 'https://api.seasoning.today/oauth/login/kakao';
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
        console.log(res);
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);

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
    <div>
      <p>로그인 중.</p>
    </div>
  );
};

export default CallBackPage;
