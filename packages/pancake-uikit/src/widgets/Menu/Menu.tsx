import throttle from "lodash/throttle";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import Footer from "../../components/Footer";
import MenuItems from "../../components/MenuItems/MenuItems";
import { SubMenuItems } from "../../components/SubMenuItems";
import { useMatchBreakpoints } from "../../hooks";
import CakePrice from "../../components/CakePrice/CakePrice";
import Logo from "./components/Logo";
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT } from "./config";
import { NavProps } from "./types";
import LangSelector from "../../components/LangSelector/LangSelector";

const Wrapper = styled.div<{ navBackgroundImgUrl: string }>`
  position: relative;
  width: 100%;

  ${({ navBackgroundImgUrl }) => 
    navBackgroundImgUrl 
      && `
        background: #000 url(${navBackgroundImgUrl}) top/cover no-repeat;
      `
  }

  @media screen and (min-width: 1920px) {
    background-size: 1920px auto;
  }
`;

const StyledNav = styled.nav<{ showMenu: boolean, showMenuBackground: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  background-color: ${({ theme, showMenuBackground }) => (showMenuBackground ? theme.nav.background : 'transparent')};
  transition: top 0.2s, background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const StyledNavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 1200px;
  }
`

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const Menu: React.FC<NavProps> = ({
  userMenu,
  globalMenu,
  isDark,
  toggleTheme,
  currentLang,
  setLang,
  cakePriceUsd,
  links,
  subLinks,
  footerLinks,
  activeItem,
  activeSubItem,
  langs,
  buyCakeLabel,
  imgUrl,
  children,
  navBackgroundImgUrl,
  footerBackgroundImgUrl,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [showMenu, setShowMenu] = useState(true);
  const [showMenuBackground, setShowMenuBackground] = useState(false);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
        setShowMenuBackground(false);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current || currentOffset <= MENU_HEIGHT) {
          // Has scroll up
          setShowMenu(true);
          setShowMenuBackground(true);
      } else {
          // Has scroll down
          setShowMenu(false);
          setShowMenuBackground(true);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const subLinksWithoutMobile = subLinks?.filter((subLink) => !subLink.isMobileOnly);
  const subLinksMobileOnly = subLinks?.filter((subLink) => subLink.isMobileOnly);

  return (
    <Wrapper navBackgroundImgUrl={navBackgroundImgUrl}>
      <StyledNav showMenu={showMenu} showMenuBackground={showMenuBackground}>
        <StyledNavContainer>
          <Flex>
            <Logo imgUrl={imgUrl} href={homeLink?.href ?? "/"} />
          </Flex>
          <Flex alignItems="center">
            {!isMobile && <MenuItems isMain items={links} activeItem={activeItem} activeSubItem={activeSubItem} mr="24px" />}
            {userMenu}
            <Box ml='16px'>
              <LangSelector
                currentLang={currentLang}
                langs={langs}
                setLang={setLang}
                buttonScale="xs"
                color="text"
              />
            </Box>
            {globalMenu}
          </Flex>
        </StyledNavContainer>
      </StyledNav>
      {subLinks && (
        <Flex justifyContent="space-around">
          <SubMenuItems items={subLinksWithoutMobile} mt={`${MENU_HEIGHT + 1}px`} activeItem={activeSubItem} />

          {subLinksMobileOnly?.length > 0 && (
            <SubMenuItems
              items={subLinksMobileOnly}
              mt={`${MENU_HEIGHT + 1}px`}
              activeItem={activeSubItem}
              isMobileOnly
            />
          )}
        </Flex>
      )}
      <BodyWrapper mt={!subLinks ? `${MENU_HEIGHT + 1}px` : "0"}>
        <Inner isPushed={false} showMenu={showMenu}>
          {children}
          <Footer
            items={footerLinks}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            cakePriceUsd={cakePriceUsd}
            buyCakeLabel={buyCakeLabel}
            mb={[`${MOBILE_MENU_HEIGHT}px`, null, "0px"]}
            footerBackgroundImgUrl={footerBackgroundImgUrl}
          />
        </Inner>
      </BodyWrapper>
      {isMobile && <BottomNav items={links} activeItem={activeItem} activeSubItem={activeSubItem} />}
    </Wrapper>
  );
};

export default Menu;
