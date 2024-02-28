import styled from 'styled-components';

import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Layout = styled.header`
  position: relative;
  width: 100%;
  height: 5.8125rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title-chinese {
    color: #000;
    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .title-korean {
    color: #000;
    text-align: center;

    font-family: 'Noto Serif KR';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .menus {
    position: absolute;
    top: 1.69rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.31rem;
  }

  svg,
  span {
    cursor: pointer;
  }

  span {
    color: #000;
    text-align: right;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Header = ({
  year,
  term,
  firstOptionItem,
  firstOptionAction,
  secondOptionItem,
  secondOptionAction,
}) => {
  return (
    <Layout>
      <span className="title-chinese">{TermsToChinese[term]}</span>
      <span className="title-korean">{`${year}, ${TermsToKorean[term]}`}</span>

      <div className="menus">
        <div onClick={firstOptionAction}>{firstOptionItem}</div>
        <div onClick={secondOptionAction}>{secondOptionItem}</div>
      </div>
    </Layout>
  );
};

export default Header;
