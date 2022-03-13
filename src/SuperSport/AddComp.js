import React from "react";
import styled from "styled-components";

const AddComp = () => {
  return (
    <Container>
      <Wrapper>hello world</Wrapper>
    </Container>
  );
};

export default AddComp;

const Container = styled.div`
  width: 100%;
  height: 120px;
`;

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  background-color: white;
  margin: 30px auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
