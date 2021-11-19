import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
        <defs>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
                <stop stopColor="#F5F5F5" offset="0%"></stop>
                <stop stopColor="#626262" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-742.000000, -2544.000000)">
                <g transform="translate(309.450000, 2481.000000)">
                    <g transform="translate(433.000000, 63.000000)">
                        <g fill="url(#linearGradient-1)" fillRule="nonzero">
                            <circle cx="50" cy="50" r="50"></circle>
                        </g>
                        <path d="M67.5,70 L52.5,70 L52.5,52.5 L70,52.5 L70,70 L67.5,70 Z M65,57.5 L57.5,57.5 L57.5,65 L65,65 L65,57.5 Z M52.5,45 L70,45 L70,50 L52.5,50 L52.5,45 Z M52.5,37.5 L70,37.5 L70,42.5 L52.5,42.5 L52.5,37.5 Z M52.5,30 L70,30 L70,35 L52.5,35 L52.5,30 Z M32.5,70 L30,70 L30,52.5 L50,52.5 L50,70 L32.5,70 Z M45,57.5 L35,57.5 L35,65 L45,65 L45,57.5 Z M45,50 L30,50 L30,30 L50,30 L50,50 L45,50 Z M45,35 L35,35 L35,45 L45,45 L45,35 Z" fill="#FFFFFF"></path>
                    </g>
                </g>
            </g>
        </g>
    </Svg>
  );
};

export default Icon;
