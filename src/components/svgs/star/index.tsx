export const StarIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="196"
    height="195"
    viewBox="0 0 196 195"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_4509_377)">
      <path
        d="M98 38L98.947 63.6656C99.5264 79.3678 112.07 91.9606 127.702 92.5345L154 93.5L127.702 94.4655C112.07 95.0394 99.5264 107.632 98.947 123.334L98 149L97.053 123.334C96.4736 107.632 83.9304 95.0394 68.2977 94.4655L42 93.5L68.2977 92.5345C83.9304 91.9606 96.4736 79.3678 97.053 63.6656L98 38Z"
        fill="url(#paint0_linear_4509_377)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_4509_377"
        x="0"
        y="0"
        width="196"
        height="195"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="21" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.368627 0 0 0 0 0.792157 0 0 0 0 0.513726 0 0 0 0.65 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4509_377" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4509_377"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_4509_377"
        x1="98"
        y1="38"
        x2="98"
        y2="149"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2BB32A" />
        <stop offset="0.495" stopColor="#4D9D4D" />
        <stop offset="1" stopColor="#086207" />
      </linearGradient>
    </defs>
  </svg>
);
