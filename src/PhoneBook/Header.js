import React from "react";
import styled from "styled-components";
import { AiFillHome, AiFillFolderAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Nav to="/">
            <Icons>
              <AiFillHome />
            </Icons>
            <span>Home</span>
          </Nav>
          <Nav to="/enter">
            <Icons>
              <AiFillFolderAdd />
            </Icons>
            <span>Add</span>
          </Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Header;
const Icons = styled.div``;

const Nav = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 60px;
  justify-content: center;
  border-radius: 5px;
  margin: 0 10px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    background-color: gray;
    cursor: pointer;
    transform: scale(1.06);
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: coral;
  color: white;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;
