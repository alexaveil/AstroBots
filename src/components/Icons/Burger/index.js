import * as React from "react";

const BurgerIcon = (props) => {
  const { width = 30, height = 26, color = "black" } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2="48" y2="1" stroke={color} stroke-width="2" />
      <line y1="14" x2="48" y2="14" stroke={color} stroke-width="2" />
      <line y1="28" x2="48" y2="28" stroke={color} stroke-width="2" />
    </svg>
  );
};

export default BurgerIcon;
