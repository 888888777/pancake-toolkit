import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 15" {...props}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1500.000000, -52.000000)" fill="#FFFFFF">
                <path d="M1507.5,52 C1503.35786,52 1500,55.3578644 1500,59.5 C1500,63.6421356 1503.35786,67 1507.5,67 C1511.64214,67 1515,63.6421356 1515,59.5 C1515,55.3578644 1511.64214,52 1507.5,52 Z M1513.96,59 L1511.98,59 C1511.96121,57.0897462 1511.38039,55.2273058 1510.31,53.645 C1512.39668,54.6489213 1513.7884,56.6907505 1513.96,59 L1513.96,59 Z M1510.97,59 L1508,59 L1508,53.074 C1509.61,53.5 1510.85,55.958 1510.97,59 Z M1507,53.074 L1507,59 L1504.02,59 C1504.15,55.958 1505.39,53.5 1507,53.074 Z M1504.69,53.645 C1503.61527,55.2252111 1503.03403,57.0889994 1503.02,59 L1501.04,59 C1501.2116,56.6907505 1502.60332,54.6489213 1504.69,53.645 L1504.69,53.645 Z M1501.04,60 L1503.02,60 C1503.03403,61.9110006 1503.61527,63.7747889 1504.69,65.355 C1502.60332,64.3510787 1501.2116,62.3092495 1501.04,60 Z M1504.02,60 L1507,60 L1507,65.926 C1505.39,65.5 1504.15,63.042 1504.02,60 Z M1508,65.926 L1508,60 L1510.97,60 C1510.85,63.042 1509.61,65.5 1508,65.926 Z M1510.31,65.355 C1511.38039,63.7726942 1511.96121,61.9102538 1511.98,60 L1513.96,60 C1513.7884,62.3092495 1512.39668,64.3510787 1510.31,65.355 Z"></path>
            </g>
        </g>
    </Svg>
  );
};

export default Icon;
