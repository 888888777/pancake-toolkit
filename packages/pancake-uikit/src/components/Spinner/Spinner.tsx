import React from "react";
import styled, { keyframes } from "styled-components";
import CircleIcon from "./CircleIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  0%   {
    transform: scale(0);
    opacity: 1;
  }
  75%  {
    transform: scale(.75)
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(CircleIcon)`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -64px;
  margin-left: -30px;
  animation: ${rotate} 1.4s infinite;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
