import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Layout = styled.header`
  position: relative;
  width: 100%;
  height: 3.3125rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  .nav-title {
    color: #000;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .back-button {
    position: absolute;
    left: 1.12rem;

    cursor: pointer;

    color: #888;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const NavigationHeader = ({ title, optionType }) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <h1 className="nav-title">{title}</h1>

      <div
        className="back-button"
        onClick={() => {
          navigate(-1);
        }}
      >
        {optionType === 'icon' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.17308 18.6625L2.5 11.9895L9.17308 5.31641L10.2173 6.36061L5.35377 11.2395H21.5096V12.7395H5.3634L10.2423 17.6183L9.17308 18.6625Z"
              fill="#333333"
            />
          </svg>
        ) : (
          <span>취소</span>
        )}
      </div>
    </Layout>
  );
};

export default NavigationHeader;
