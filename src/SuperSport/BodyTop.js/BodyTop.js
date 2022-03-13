import React from "react";
import styled from "styled-components";
import BodyTopButton from "./BodyTopButton";

const BodyTop = () => {
  return (
    <Container>
      <Wrapper>
        <BodyTopButton />
      </Wrapper>
    </Container>
  );
};

export default BodyTop;

const Container = styled.div``;

const Wrapper = styled.div``;
