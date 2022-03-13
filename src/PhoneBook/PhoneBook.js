import React, { useState, useEffect } from "react";
import styled from "styled-components";
import app from "./base";
import { Link } from "react-router-dom";

const PhoneBook = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await app
      .firestore()
      .collection("phonebookUser")
      .onSnapshot((snaphot) => {
        const r = [];
        snaphot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setData(r);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <Wrapper>
        {data.map(({ avatar, id, name, email, phone, status }) => (
          <List key={id} to={`/details/${id}`}>
            <Indicator>
              <Image src={avatar} />
              {status === "Friend" ? (
                <Point />
              ) : status === "Business" ? (
                <Point bg />
              ) : null}
            </Indicator>
            <Content>
              <Name>{name}</Name>
              <Email>{email}</Email>
            </Content>
            <Phone>{phone}</Phone>
          </List>
        ))}
      </Wrapper>
    </Container>
  );
};

export default PhoneBook;

const Point = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ bg }) => (bg ? "red" : "lightgreen")};
  top: 45px;
  right: 5px;
`;

const Indicator = styled.div`
  position: relative;
`;

const List = styled(Link)`
  background-color: lightgray;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 350ms;
  border-bottom: 1px solid #ff91ac;
  text-decoration: none;
  color: black;

  :hover {
    cursor: pointer;
    background-color: gray;
  }
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: red;
  margin-left: 10px;
`;

const Content = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Email = styled.div`
  font-size: 15px;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 25px;
`;
const Phone = styled.div`
  margin-right: 10px;
`;

const Container = styled.div`
  /* width: 100%;
height: 100%;
min-height:94vh; */

  width: 100%;
  height: 100%;
  min-height: 90vh;

  /* padding-top: 30px; */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
