import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  width: 100%;
  min-width: 100%;
  height: 100%;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  scroll-snap-align: center;
  white-space: pre-wrap;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.75rem;
  }

  h1 {
    width: 100%;
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 134%;
  }

  description {
    width: 100%;
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 134%;
  }

  img {
  }
`;
export default function OnboardingTitle({ mainText, subText }) {
  return (
    <Layout>
      <section>
        <h1>{mainText}</h1>
        <description>{subText}</description>
      </section>
    </Layout>
  );
}
