import React from "react";
import styled from "styled-components";
import { AiFillHome, AiOutlineLogin } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { Link } from "react-router-dom";

const HeaderBuild = () => {
  return (
    <Container>
      <Logo>.CodeLab</Logo>
      <Wrapper>
        <Navbar to="/">
          <Icon>
            <AiFillHome />
          </Icon>
          <span>Home</span>
        </Navbar>
        <Navbar to="/create">
          <Icon>
            <IoMdCreate />
          </Icon>
          <span>create</span>
        </Navbar>
        <Navbar to="/stats">
          <Icon>
            <ImStatsDots />
          </Icon>
          <span>stats</span>
        </Navbar>
      </Wrapper>
      <Navbar1 to="/register">
        <Icons>
          <AiOutlineLogin />
        </Icons>
        <span>Register</span>
      </Navbar1>
    </Container>
  );
};

export default HeaderBuild;

const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #103464;
  position: fixed;
`;

const Logo = styled.div`
  color: white;
  margin: 0 20px;
  font-weight: bold;
  font-size: 30px;
  font-family: sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const Icon = styled.div`
  color: white;
  margin: 0 10px;
`;

const Icons = styled.div`
  color: white;
  margin: 0 10px;
`;

const Navbar = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  transition: all 350ms;
  text-decoration: none;
  span {
    color: white;
    font-size: 14px;
    font-weight: bold;
    font-family: poppins;
    text-transform: uppercase;
  }
  &:hover {
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    width: 150px;
    border-radius: 5px;
    background-color: lightgray;
  }
`;

const Navbar1 = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  text-decoration: none;
  transition: all 350ms;
  span {
    color: white;
    font-size: 14px;
    font-weight: bold;
    font-family: poppins;
    text-transform: uppercase;
  }
  &:hover {
    width: 150px;
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    border-radius: 5px;
  }
`;
