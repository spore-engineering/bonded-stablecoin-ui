import React from "react";

export const StableToken = ({ name }) => (
  <svg viewBox="0 0 413 113" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.49105 0C2.56547 0.00091128 1.6781 0.330922 1.02362 0.917623C0.369143 1.50432 0.00101656 2.29979 0 3.12951V109.87C0.00101656 110.7 0.369143 111.496 1.02362 112.082C1.6781 112.669 2.56547 112.999 3.49105 113H409.509C410.434 112.999 411.322 112.669 411.976 112.082C412.631 111.496 412.999 110.7 413 109.87V3.12951C412.999 2.29979 412.631 1.50432 411.976 0.917623C411.322 0.330922 410.434 0.00091128 409.509 0H3.49105Z"
      fill="#E6E6E6"
    />
    <path d="M9 105H404V8H9V105Z" fill="white" />
    <path
      d="M373.167 92C372.062 92 371.002 92.4214 370.22 93.1716C369.439 93.9217 369 94.9391 369 96C369 97.0609 369.439 98.0783 370.22 98.8284C371.002 99.5786 372.062 100 373.167 100H389.833C390.938 100 391.998 99.5786 392.78 98.8284C393.561 98.0783 394 97.0609 394 96C394 94.9391 393.561 93.9217 392.78 93.1716C391.998 92.4214 390.938 92 389.833 92H373.167Z"
      fill="#0037FF"
    />
    <svg>
      <svg width="96" height="96">
        <circle cx="48" cy="57" r="24" fill="#0037FF" />
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fill="white"
          fontSize="16px"
          fontWeight="bold"
          fontFamily="Open Sans"
          dy=".3em"
        >
          {name}
        </text>
      </svg>
    </svg>

    <path d="M85 56L386 56" stroke="black" />
  </svg>
);