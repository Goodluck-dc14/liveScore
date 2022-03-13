import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Header2 from "./Header/Header2";
import AddComp from "./AddComp";
import BodyTop from "./BodyTop.js/BodyTop";
import BodyNav from "./Body/BodyNav";

const MainBuild = () => {
  return (
    <Container>
      <Header />
      <Header2 />
      <AddComp />
      <BodyTop />
      <BodyNav />
    </Container>
  );
};

export default MainBuild;

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: #e7e8ea;
`;
