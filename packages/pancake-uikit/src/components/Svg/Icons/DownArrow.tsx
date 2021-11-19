import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 13 7" {...props}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1597.000000, -58.000000)" fill="#F4F9F6">
                <polygon points="1603.5 65.003 1597 58.943 1598.01 58 1603.5 63.117 1608.99 58.003 1610 58.946"></polygon>
            </g>
        </g>
    </Svg>
  );
};

export default Icon;
