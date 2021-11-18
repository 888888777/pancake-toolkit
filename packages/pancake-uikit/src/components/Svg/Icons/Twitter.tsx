import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps & { fillColor?: string }> = ({ fillColor = "#B8ADD2", ...props }) => {
  return (
    <Svg viewBox="0 0 44 36" {...props}>
      <g id="官网" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="最新官网" transform="translate(-616.000000, -3299.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <g id="编组-12" transform="translate(470.000000, 3161.000000)">
            <g id="组_4758" transform="translate(128.000000, 116.000000)">
              <path d="M58.1516113,30.6515683 C58.1516113,46.2106853 47.8579102,57.4134628 32.7167969,57.9040175 C27.4265926,58.4177938 22.1440081,56.8550456 18,53.5503441 C22.7500391,54.0892195 27.5159985,52.681554 31.1967773,49.6525667 C27.4427083,49.7385865 24.0689584,47.3897778 22.871582,43.8565557 L26.7978516,43.8565557 C22.6766396,42.6560493 19.8594436,38.8849517 19.8986816,34.6213293 C21.0946677,35.2899941 22.4531922,35.618397 23.8249512,35.5704461 C19.9744948,32.784241 18.7307693,27.6353272 20.8896484,23.4185518 C25.4183921,29.1517445 32.2065394,32.6813604 39.5327148,33.1123402 C37.0566406,23.4185518 49.826416,18.50234 55.2055664,24.8475591 C57.2766953,24.3587732 59.2503221,23.5278262 61.0439453,22.3894532 C60.6423664,24.5590584 59.1660925,26.3814864 57.1176758,27.2363474 C58.856217,27.2713658 60.5626151,26.768193 62,25.7966759 C61.3004988,27.7968465 59.9454391,29.5063071 58.1516113,30.6515683 Z" id="路径_5600"></path>
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
