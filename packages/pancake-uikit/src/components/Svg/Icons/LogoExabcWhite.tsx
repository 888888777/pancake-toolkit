import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 238 64" {...props} >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-355.000000, -195.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <path d="M398,257 L398,245.343284 L368.591954,245.343284 L368.591954,235 L395.363985,235 L395.363985,224 L368.591954,224 L368.591954,213.656716 L397.752874,213.656716 L397.752874,202 L355,202 L355,257 L398,257 Z M417.705357,257 L425.5,245.180915 L433.214286,257 L448,257 L434.660714,237.192843 L448,216 L433.214286,216 L425.5,228.715706 L417.705357,216 L403,216 L416.258929,237.192843 L403,257 L417.705357,257 Z M466.234216,259 C471.692464,259 475.602851,257.180451 478.454175,254.699248 L478.454175,257.759398 L491,257.759398 L491,231.458647 C491,220.87218 483.749491,215 472.262729,215 C462.486762,215 455.317719,220.045113 453.525458,228.067669 L465.826884,230.631579 C466.478615,226.992481 468.759674,225.421053 472.670061,225.421053 C476.09165,225.421053 478.454175,227.736842 478.454175,231.210526 L478.454175,232.037594 L468.026477,232.037594 C457.10998,232.037594 451,237.330827 451,245.43609 C451,253.62406 457.10998,259 466.234216,259 Z M470.6,250 C467.24,250 465,248.269231 465,245.5 C465,242.817308 467,241 470.2,241 L479,241 L479,241.951923 C479,246.798077 475,250 470.6,250 Z M524.347594,259 C535.016043,259 544,250.276433 544,237.313376 C544,224.431847 535.016043,215.626752 524.347594,215.626752 C519.13369,215.626752 514.962567,217.257325 511.834225,220.110828 L511.834225,195 L499,195 L499,257.77707 L511.834225,257.77707 L511.834225,254.515924 C514.962567,257.369427 519.13369,259 524.347594,259 Z M523.081967,248 C517.754098,248 513,243.8 513,237.5 C513,231.280769 517.754098,227 523.081967,227 C528.819672,227 533,231.280769 533,237.5 C533,243.8 528.819672,248 523.081967,248 Z M571.74717,259 C582.124528,259 590.924528,252.631579 593,242.789474 L580.796226,240.142857 C579.384906,245.18797 575.981132,247.421053 571.74717,247.421053 C565.769811,247.421053 561.784906,243.120301 561.784906,237 C561.784906,230.962406 565.769811,226.578947 571.74717,226.578947 C575.981132,226.578947 579.384906,228.894737 580.54717,233.93985 L593,230.962406 C590.675472,221.203008 581.875472,215 571.74717,215 C559.29434,215 549,223.932331 549,237 C549,250.150376 559.29434,259 571.74717,259 Z"></path>
            </g>
        </g>
    </Svg>
  );
};

export default Icon;
