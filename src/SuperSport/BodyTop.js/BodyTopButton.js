import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

const BodyTopButton = ({ bg, clr, bg1, clr1 }) => {
  return (
    <Container>
      <Wrapper>
        <Title>BodyTopButton</Title>
        <Icons />
      </Wrapper>
    </Container>
  );
};

export default BodyTopButton;

const Container = styled.div`
  background-color: ${({ bg }) => (bg ? "#103464" : "white")};
  color: ${({ clr }) => (clr ? "#103464" : "white")}
  height: 40px;
  width: 200px;
  margin: 20px;
  &:hover{
    background-color: ${({ bg1 }) => (bg1 ? "white" : "#103464")};
    color: ${({ clr1 }) => (clr1 ? "#103464" : "white")}
  }
`;

const Wrapper = styled.div`
  height: 60px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div``;

const Icons = styled(AiFillCaretDown)`
  margin-left: 5px;
`;
