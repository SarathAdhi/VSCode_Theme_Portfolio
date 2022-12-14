import PageLayout from "@layouts/PageLayout";
import type { NextPage } from "next";

const Blank: NextPage = () => {
  return (
    <PageLayout className="h-full flex items-center justify-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-full h-full p-5 lg:w-96 lg:h-96"
          viewBox="0 0 40 40"
        >
          <g clipPath="url(#a)" opacity=".3">
            <mask
              id="b"
              width="40"
              height="40"
              x="0"
              y="0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
            >
              <path
                fill="#000"
                d="M27.508 39.167a2.491 2.491 0 0 0 2.841.484l8.235-3.96A2.498 2.498 0 0 0 40 33.438V6.586c0-.96-.55-1.836-1.416-2.252L30.35.374a2.491 2.491 0 0 0-2.841.483c.922-.922 2.498-.269 2.498 1.035v36.24c0 1.304-1.576 1.957-2.498 1.035Z"
              />
              <path
                fill="#000"
                d="M28.34 28.226 17.864 20.1l10.476-8.3V2.78c0-1.085-1.289-1.654-2.09-.923L11.663 15.29l-6.79-5.267a1.666 1.666 0 0 0-2.126.094L.545 12.119a1.666 1.666 0 0 0-.002 2.464l25.704 23.57c.801.736 2.093.167 2.093-.92v-9.007ZM5.733 20.968l-5.19 4.474a1.666 1.666 0 0 0 .002 2.463l2.203 2.003c.593.54 1.488.58 2.127.094l5.976-4.368-5.118-4.666Z"
              />
            </mask>
            <g mask="url(#b)">
              <path
                fill="#000"
                d="m5.733 20.968-5.19 4.474a1.666 1.666 0 0 0 .002 2.463l2.203 2.003c.593.54 1.488.58 2.127.094l5.976-4.368-5.118-4.666Z"
              />
              <g filter="url(#c)" fill="#000">
                <path d="M28.34 28.226 4.875 10.022a1.666 1.666 0 0 0-2.127.095L.545 12.119a1.666 1.666 0 0 0-.002 2.464l25.703 23.57c.801.735 2.094.166 2.094-.922v-9.005Z" />
                <path
                  fillRule="evenodd"
                  d="M28.34 2.78c0-1.085-1.289-1.654-2.09-.923L11.663 15.29l6.2 4.81 10.476-8.3V2.78Z"
                  clipRule="evenodd"
                />
              </g>
              <g filter="url(#d)">
                <path
                  fill="#000"
                  d="M30.35 39.651a2.491 2.491 0 0 1-2.842-.483c.922.922 2.498.269 2.498-1.035V1.893c0-1.304-1.576-1.957-2.498-1.035a2.491 2.491 0 0 1 2.841-.484l8.235 3.96A2.499 2.499 0 0 1 40 6.587V33.44c0 .96-.55 1.836-1.416 2.252l-8.235 3.96Z"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="c"
              width="35.007"
              height="43.622"
              x="-3.333"
              y="-1.805"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.667" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="d"
              width="19.159"
              height="46.436"
              x="24.174"
              y="-3.205"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.667" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                mode="overlay"
                result="effect1_dropShadow"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h40v40H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </PageLayout>
  );
};

export default Blank;
