import React from 'react'

export default (props) => {

  const {
    style,
  } = props

  return (
    <svg viewBox="0 0 369.38 395.63" {...style}>
      <defs>
        <linearGradient id="linear-gradient" x1="174.6" y1="148.46" x2="227.12" y2="395.57" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffd54f"/>
          <stop offset="0.12" stopColor="#ffd246"/>
          <stop offset="0.7" stopColor="#ffc61f"/>
          <stop offset="1" stopColor="#ffc110"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="0" y1="111.01" x2="369.38" y2="111.01" xlinkHref="#linear-gradient"/>
        <linearGradient id="linear-gradient-3" x1="181.81" y1="324.7" x2="181.81" y2="369.64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffc110"/>
          <stop offset="0.41" stopColor="#febe11"/>
          <stop offset="0.68" stopColor="#fdb614"/>
          <stop offset="0.9" stopColor="#faa718"/>
          <stop offset="1" stopColor="#f89e1b"/>
        </linearGradient>
      </defs>
      <path
        id="body-2"
        data-name="body"
        d="M184.69,369.57q7.24,0,14.35-.56c2.84-.21,10.4-1.08,13.21-1.42C217,367,223,396.4,227.67,395.45c4.94-1,3.74-31.41,8.52-32.8,76.94-22.28,133.19-86.08,133.19-177.08H0c0,85,53,150.61,126.49,175,4.24,1.41,4,33.92,8.41,35s13.64-29.42,18.29-28.62c5.59,1,11.28,1.63,17,2.08C175,369.43,179.82,369.57,184.69,369.57Z"
        style={{
          fill: 'url(#linear-gradient)',
        }}
      />
      <path
        id="middle"
        d="M369.38,184.49c0,19.52-82.68,35.34-184.69,35.34S0,204,0,184.49s82.69-35.34,184.69-35.34S369.38,165,369.38,184.49Z"
        style={{
          fill: '#ffde80',
        }}
      />
      <path
        id="head"
        d="M369.38,185.57c0-96-75-177.92-170.22-185.31-4.78-.36-24.07-0.35-28.8,0C75.05,7.59,0,89.57,0,185.57H0.15c-0.06,6-.15.73-0.15,1.12C0,206.21,82.69,222,184.69,222s184.69-15.8,184.69-35.32c0-.38-0.08,4.87-0.15-1.13h0.15Z"
        style={{
          opacity: 0.2,
          fill: 'url(#linear-gradient-2)',
        }}
      />
      <path
        id="bottom"
        d="M265.21,350.4c-23.66,10.45-49.85,20.18-80.52,19.18-45-1.48-72.23-15.5-88.27-23.24-7.57-3.64,38.23-21.63,93.33-21.63C228,324.7,280.87,343.48,265.21,350.4Z"
        style={{
          opacity: 0.5,
          fill: 'url(#linear-gradient-3)',
        }}
      />
    </svg>
  )
}
