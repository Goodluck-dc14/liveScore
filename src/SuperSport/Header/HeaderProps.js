import React from "react";
import styled from "styled-components";

const HeaderProps = ({ img, name }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={img} />
        <Name>{name}</Name>
      </Wrapper>
    </Container>
  );
};

export default HeaderProps;

const Container = styled.div`
  height: 100%;
  width: 250px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 350ms;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
    transform: scale(1);
  }
  img {
    height: 60px;
    width: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
  }
  &:hover {
    transform: scale(1.2);
    transition: all 350ms;
  }
`;

const Name = styled.div`
  font-size: 10px;
  color: gray;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 30px;
  object-fit: cover;
`;
