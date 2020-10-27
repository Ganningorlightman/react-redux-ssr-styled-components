import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Avatar from "./avatar";
import Flex from "react-base-guide/frontend/components/flex";

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${p => p.theme.zIndex.fixed};
  padding: 0 40px;
  background: ${p => p.theme.colors.surface};
  border-bottom: 1px solid ${p => p.theme.colors.border};
  
  @media(max-width: ${p => p.theme.screens.tablet}) {
    height: 50px;
    padding: 0 10px;
  }
  @media print {
    display: none;
  }
`;

const Logo = styled.a`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  color: ${p => p.theme.colors.link};
  font-size: 24px;
  font-weight: 600;
  margin-right: 30px;
  @media(max-width: ${p => p.theme.screens.tablet}) {
    font-size: 18px;
    margin-right: 15px;
  }
`;

const HeaderLink = styled.a`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  height: 100%;
  padding: 0 15px;
  color: ${p => p.active ? p.theme.colors.onSurface : p.theme.colors.onBackgroundVariant};
  font-size: 16px;
  line-height: 60px;
  @media(max-width: ${p => p.theme.screens.tablet}) {
    line-height: 50px;
  }
  
  &:after {
    content: "";
    position: absolute;
    width: ${p => p.active ? "100%" : "0"};
    background: ${p => p.theme.colors.onSurface};
    height: 2px;
    left: 0;
    bottom: -1px;
    transition: width 0.3s;
  }
`;

const OnlyDesktop = styled.div`
  display: inline-block;
  @media(max-width: ${p => p.theme.screens.mobile}) {
    display: none;
  }
`;

const Header = ({ user }) => {
    const [pathname, setPathname] = useState(null);

    useEffect(() => {
        setPathname(location.pathname);
    }, []);

    
    return (
        <Wrapper>
            <div>
                <Logo
                    href={routing.pages.main}
                    onClick={() => setPathname(routing.pages.main)}
                >Main</Logo>

                {user && <OnlyDesktop>
                </OnlyDesktop>}
            </div>
            <div>
                {user ?
                    <Flex>
                        <Avatar user={user} />
                    </Flex> :
                    <HeaderLink
                        href={routing.pages.account.login}
                        onClick={() => setPathname(routing.pages.account.login)}
                        active={pathname === routing.pages.account.login}
                    >Вход</HeaderLink>
                }
            </div>
        </Wrapper>
    );
};

export default Header;
