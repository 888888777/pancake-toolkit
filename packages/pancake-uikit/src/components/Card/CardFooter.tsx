import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
  background: ${({ theme }) => (theme.colors.gradients.cardHeader)};
  /* border-top: 1px solid ${({ theme }) => theme.colors.cardBorder}; */
  ${space}
`;

CardFooter.defaultProps = {
  p: "24px",
};

export default CardFooter;
