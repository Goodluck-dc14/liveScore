import React from "react";
import styled from "styled-components";

const RedButton = ({ bg, clr, bc, bld, bg1, clr1, text, tt }) => {
  return (
    <Container bg={bg} clr={clr} bc={bc} bld={bld} bg1={bg1} clr1={clr1}>
      <Wrapper tt={tt}>{text}</Wrapper>
    </Container>
  );
};

export default RedButton;

const Container = styled.div`
  margin: 10px;
  background-color: ${({ bg }) => (bg ? "transparent" : "#0069d9")};
  border-radius: 5px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  color: ${({ clr }) => (clr ? "#0069d9" : "white")};
  font-weight: ${({ bld }) => (bld ? "bold" : "normal")};
  transform: scale(1);
  transition: all 350ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    background-color: ${({ bg1 }) => (bg1 ? "transparent" : "#0069d9")};
    color: ${({ clr1 }) => (clr1 ? "white" : "#0069d9")};
  }
`;

const Wrapper = styled.div`
  text-transform: ${({ tt }) => (tt ? "uppercase" : "")};
`;
