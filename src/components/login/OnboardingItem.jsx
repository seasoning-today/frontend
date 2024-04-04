import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  width: 100%;
  min-width: 100%;
  height: 100%;
  padding: 8svh 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  scroll-snap-align: center;
  white-space: pre-wrap;

  .text-container {
    position: relative;
    width: 100%;
    flex: 2.5;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.75rem;
  }

  .image-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    flex: 7.5;
  }

  h1 {
    width: 100%;
    flex-shrink: 0;

    color: #333;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
  }

  description {
    width: 100%;
    flex-shrink: 0;

    color: #8e8c86;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 134%;
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function OnboardingItem({ mainText, subText, imageURL }) {
  return (
    <Layout>
      <section className="text-container">
        <h1>{mainText}</h1>
        <description>{subText}</description>
      </section>

      <section className="image-container">
        <img src={imageURL} />
      </section>
    </Layout>
  );
}
