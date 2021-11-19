import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";

export const StyledFooter = styled(Flex)<{ footerBackgroundImgUrl: string }>`
  /* background: ${darkColors.backgroundAlt}; */

  ${({ footerBackgroundImgUrl }) => 
  footerBackgroundImgUrl 
      && `
        background: url(${footerBackgroundImgUrl}) center/cover no-repeat;
      `
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledDesc = styled.div`
  margin-top: 60px;
  font-size: 16px;
  color: #585858;
  line-height: 19px;
`;

export const StyledListItem = styled.li`
  font-size: 14px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    font-size: 16px;
    color: ${darkColors.primary};
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 44px;
  }
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-color: ${darkColors.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)`
  border-bottom: 1px solid ${darkColors.cardBorder};
`;

export const StyledText = styled.span`
  color: ${darkColors.text};
`;
