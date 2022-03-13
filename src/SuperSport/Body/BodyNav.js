import React from "react";
import styled from "styled-components";
import { BiFootball } from "react-icons/bi";
import img from "./western-province.png";
import img1 from "./imperial-lions.png";

const BodyNav = () => {
  return (
    <Container>
      <Wrapper>
        <span>
          <Icon />
          <Text>CSA T20 KO 2021/22</Text>
        </span>

        <Text>Lions need 110 runs to win from 10.0 overs</Text>
        <Row>
          <Span1>
            <Icon2 src={img} />
            <Text>Western Province</Text>
            <span>197/7</span>
          </Span1>

          <Span1>
            <Icon1 src={img1} />
            <Text>Lions</Text>
            <span>102/3</span>
          </Span1>
        </Row>
        <Text>Pool Game ...</Text>
      </Wrapper>
    </Container>
  );
};

export default BodyNav;

const Container = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 10px;
  flex-direction: column;
  background-color: white;
  color: black;

  &:hover {
    background-color: #103464;
    color: white;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  span {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;
const Icon = styled(BiFootball)`
  font-size: 30px;
  color: blue;

  &:hover {
    color: white;
  }
`;
const Icon2 = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;
const Icon1 = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const Span1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 20px;
  font-family: poppins;
  font-weight: normal;
  display: flex;

  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;
