import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle fill="#666" cx="12" cy="12" r="12"></circle>
        </g>
    </Svg>
  );
};

export default Icon;
