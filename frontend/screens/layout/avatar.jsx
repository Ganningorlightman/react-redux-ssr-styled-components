import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
`;

const Icon = styled.img`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  object-fit: cover;
  object-position: center;
  width: 40px;
  height: 40px;
  background: ${p => p.theme.colors.surfaceVariant};
  border-radius: 50%;
`;

const Body = styled.div`
  position: absolute;
  width: 200px;
  right: 0;
  padding: 2px 0;
  border-radius: ${p => p.theme.radius.default};
  background: ${p => p.theme.colors.surface};
  box-shadow: ${p => p.theme.shadows.m};
  z-index: ${p => p.theme.zIndex.absolute};
  margin-top: 10px;
  
  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    top: -14px;
    right: 13px;
    border: 6px solid transparent; 
    border-bottom: 8px solid ${p => p.theme.colors.surface};
  }
`;

const MenuLink = styled.a`
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 12px;
  color: ${p => p.theme.colors.onSurface};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1;
  transition: background 0.3s, color 0.3s;
  
  &:hover {
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.onPrimary};
  }
`;

const Divider = styled.div`
  display: block;
  height: 1px;
  background: ${p => p.theme.colors.border};
  margin: 1px 0;
`;

const OnlyMobile = styled.div`
  display: none;
  @media(max-width: ${p => p.theme.screens.mobile}) {
    display: block;
  }
`;

const Avatar = ({ user }) => {
    const [open, setOpen] = useState(false);
    // console.log(open)

    return (
        <Wrapper>
            <Icon onClick={() => setOpen(!open)} src={user.avatar} />
            {open && <Body>
                <MenuLink href={routing.pages.account.profile} onClick={() => setOpen(false)}>
                    {user.firstName + " " + user.lastName}
                </MenuLink>

                <OnlyMobile>
                    <MenuLink
                        href=""
                        onClick={() => setOpen(false)}
                    >Проекты</MenuLink>
                    <MenuLink
                        href=""
                        onClick={() => setOpen(false)}
                    >Создать проект</MenuLink>
                </OnlyMobile>

                <Divider />
                <MenuLink href="" onClick={() => setOpen(false)}>Сотрудники</MenuLink>
            </Body>}
        </Wrapper>
    )
};

export default Avatar;
