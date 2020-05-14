import React, {useEffect, useRef} from "react"
import gsap from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
gsap.registerPlugin(MotionPathPlugin)


export const BikeOnPath = () => {
  const stop1 = useRef(null);
  const stop2 = useRef(null);

  useEffect(() => {
    animate();
  }, []) 

  
  const animate = () => {
      gsap.to("#bike", {
        duration: 10, 
        ease: "power1.outIn",
        motionPath: {
          path: "#bikePath",
            align: "#bikePath",
            autoRotate: true,
            alignOrigin: [0.5, 1.075]
      }
      })

      gsap.to(stop2.current, {
        duration: 10,
        attr: { offset: 1 },
        ease: "power1.outIn"
      })

      gsap.to(stop1.current, {
        duration: 10,
        attr: { offset: 1 },
        ease: "power1.outIn"
      })
  }

  return (
    <svg
          viewBox="0 0 1219 400"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          id="bikeMove"
          aria-hidden="true" 
          focusable="false" 
        >
          <path
            d="M35.689 91.566s122.114 96.957 244.583 0c122.47-96.957 227.82 0 227.82 0m.32 0s122.114 96.957 244.582 0c122.473-96.957 218.01 0 218.01 0m.102 0s122.115 96.957 244.582 0"
            fill="none"
            stroke="url(#bikeLine)"
            stroke-width="3"
            id="bikePath"
          />
          <g id="bike">
          <g transform="matrix(.32922 0 0 .32922 5.14 45.47)" fill="none">
            <ellipse cx="98" cy="92.5" rx="98" ry="92.5" />
            <ellipse
              cx="98"
              cy="92.5"
              rx="93"
              ry="87.5"
              stroke="#020202"
              stroke-width="10"
            />
          </g>
          <path
            d="M338.444 89.313l-1.878 2.615-9.661 13.468-57.687 86.132m-48.469 26.342l47.503-26.085"
            fill="none"
            stroke="#222"
            stroke-width="20"
            stroke-linecap="round"
            transform="matrix(.32922 0 0 .32922 5.14 4.536)"
          />
          <path
            d="M0 0l44 139"
            fill="none"
            stroke="#222"
            stroke-width="10"
            transform="matrix(.32922 0 0 .32922 63.248 28.186)"
          />
          <path
            d="M73.788 23.998c1.95.027 2.245 2.82.343 3.253l-18.663 4.245a1.655 1.655 0 01-2.004-1.433l-.475-4.5a1.655 1.655 0 011.66-1.82l19.14.255z"
            fill="#222"
            fill-rule="nonzero"
          />
          <path
            d="M72.637 78.098L43.8 75.311c-2.054-.2-1.948-3.231.115-3.284l35.808-.952h.1c.262.01.509.082.726.201.53-.084 1.075-.127 1.63-.127 5.45 0 9.876 4.204 9.876 9.382 0 5.179-4.425 9.383-9.876 9.383-5.45 0-9.877-4.204-9.877-9.383 0-.841.117-1.657.336-2.433z"
            fill="#222"
          />
          <ellipse
            cx="17"
            cy="17.5"
            rx="17"
            ry="17.5"
            fill="#222"
            transform="matrix(.32922 0 0 .32922 31.808 71.149)"
          />
          <g transform="matrix(.32922 0 0 .32922 5.14 45.47)" fill="none">
            <ellipse cx="98" cy="92.5" rx="98" ry="92.5" />
            <ellipse
              cx="98"
              cy="92.5"
              rx="95.5"
              ry="90"
              stroke="#222"
              stroke-width="5"
            />
          </g>
          <path
            d="M0 0l21.718 57.646 6 15.917L66 184"
            fill="none"
            stroke="#222"
            stroke-width="10"
            transform="matrix(.32922 0 0 .32922 113.29 18.31)"
          />
          <path
            d="M191.5 129.837l-101 91m114 10l-114-5"
            fill="none"
            stroke="#222"
            stroke-width="5"
            transform="matrix(.32922 0 0 .32922 5.14 4.536)"
          />
          <path
            d="M107.5-4.758C105.11-4.671 95.345.278 86.919.33c-9.5.059-26.5 0-26.5 0L14.47.027C-.693-.073-4.34 16.531-4.34 16.531"
            fill="none"
            stroke="#222"
            stroke-width="5"
            stroke-linecap="round"
            transform="matrix(.32922 0 0 .32922 15.686 40.886)"
          />
          <path
            d="M19 0L0 104"
            fill="none"
            stroke="#222"
            stroke-width="3"
            transform="matrix(.32922 0 0 .32922 36.91 41.684)"
          />
          <path
            d="M0 0l61 86"
            fill="none"
            stroke="#222"
            stroke-width="3"
            stroke-linecap="round"
            transform="matrix(.32922 0 0 .32922 14.853 45.634)"
          />
          <path
            d="M17 0L0 20"
            fill="none"
            stroke="#222"
            stroke-width="10"
            stroke-linecap="round"
            transform="matrix(.32922 0 0 .32922 113.29 11.725)"
          />
          <path
            d="M0 46L79 0"
            fill="none"
            stroke="#222"
            stroke-width="10"
            stroke-linecap="round"
            transform="matrix(.32922 0 0 .32922 101.437 6.786)"
          />
          <g transform="matrix(.32922 0 0 .32922 100.614 45.47)" fill="none">
            <ellipse cx="98" cy="92.5" rx="98" ry="92.5" />
            <ellipse
              cx="98"
              cy="92.5"
              rx="93"
              ry="87.5"
              stroke="#222"
              stroke-width="10"
            />
          </g>
          <ellipse
            cx="17"
            cy="17.5"
            rx="17"
            ry="17.5"
            fill="#222"
            transform="matrix(.32922 0 0 .32922 127.61 71.149)"
          />
          <path
            d="M108.205 43.831a3.623 3.623 0 00-.977-5.027 3.623 3.623 0 00-5.028.977l-8.1 12.01a3.623 3.623 0 00.977 5.027 3.623 3.623 0 005.028-.978l8.1-12.009z"
            fill="#222"
          />
          <g>
            <path
              d="M107.904 35.336c.874-.4 1.91-.214 2.59.466.68.679.866 1.716.465 2.59l-1.156 2.521a2.303 2.303 0 01-.465.668 2.316 2.316 0 01-3.258 0l-1.366-1.365a2.316 2.316 0 010-3.26c.194-.193.42-.35.67-.464l2.52-1.156z"
              fill="#222"
              fill-rule="nonzero"
            />
          </g>
          <g id="pedal">
            <path
              d="M93.042 96.005c0-.818-.664-1.482-1.481-1.482h-7.902a1.482 1.482 0 000 2.963h7.902c.817 0 1.481-.664 1.481-1.481z"
              fill="#222"
            />
            <path
              d="M0 0l12 25"
              fill="#222"
              fill-rule="nonzero"
              stroke="#222"
              stroke-width="8"
              transform="matrix(.32922 0 0 .32922 83.989 87.774)"
            />
          </g>
       </g>
        <defs>
            <linearGradient id="bikeLine" gradientUnits="userSpaceOnUse">
              <stop ref={stop1} offset="0" stopColor="#f40e67"></stop>
              <stop ref={stop2} offset="1" stopColor="#fccd11"></stop>
            </linearGradient>
          </defs>
        </svg>
  )
}
