import * as S from './style';

export default function Toggle({ on }) {
  return (
    <S.Layout>
      {on ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="20"
          viewBox="0 0 36 20"
          fill="none"
        >
          <g filter="url(#filter0_i_1496_6479)">
            <rect width="36" height="20" rx="10" fill="#2C8253" />
          </g>
          <circle cx="26" cy="10" r="8" fill="white" />
          <defs>
            <filter
              id="filter0_i_1496_6479"
              x="0"
              y="0"
              width="36"
              height="22"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1496_6479"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="20"
          viewBox="0 0 36 20"
          fill="none"
        >
          <g filter="url(#filter0_i_1311_4124)">
            <rect width="36" height="20" rx="10" fill="#D9D9D9" />
          </g>
          <circle cx="10" cy="10" r="8" fill="white" />
          <defs>
            <filter
              id="filter0_i_1311_4124"
              x="0"
              y="0"
              width="36"
              height="22"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1311_4124"
              />
            </filter>
          </defs>
        </svg>
      )}
    </S.Layout>
  );
}
