import React from "react";
import styled from "styled-components";
import img from "../logo.png";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import RedButton from "./RedButton";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={img} />
        <Menu>
          <NavLink>Football</NavLink>
          <NavLink>Rugby</NavLink>
          <NavLink>Cricket</NavLink>
          <NavLink>Golf</NavLink>
          <NavLink>Motorsport</NavLink>
          <NavLink>Tennis</NavLink>
          <NavLink>
            More{" "}
            <Icon>
              <BsFillCaretDownFill />
            </Icon>
          </NavLink>
        </Menu>
        <SubMenu>
          <Icons>
            <BsMicFill />
          </Icons>
          <Win>win</Win>
          <Tv>Tv guide</Tv>
          <RedButton text="get more" />
          <RedButton text="watch" />
        </SubMenu>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  width: 100%;
  color: white;
  background-color: #103464;
`;

const Wrapper = styled.div`
  margin: 0 10px;
  width: 90%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 50px;
  margin-right: 40px;
  margin-top: 10px;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  text-transform: uppercase;
`;

const NavLink = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: poppins;
`;

const Icon = styled(BsFillCaretDownFill)``;

const SubMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;

const Icons = styled(BsMicFill)`
  font-size: 25px;
`;

const Win = styled.div``;

const Tv = styled.div``;
