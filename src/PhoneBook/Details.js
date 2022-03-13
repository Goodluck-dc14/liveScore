import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import app from "./base";
import Update from "./Update";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [fetchData, setFetchData] = useState([]);

  const getData = async (id) => {
    await app
      .firestore()
      .collection("phonebookUser")
      .doc(id)
      .get()
      .then((user) => {
        setFetchData(user.data());
      });
  };

  useEffect(() => {
    getData(id);
    console.log(fetchData);
  }, []);

  return (
    <Fragment>
      <Container>
        <Wrapper>
          <Image src={fetchData.avatar} />
          <Content>
            <Name>{fetchData.name}</Name>
            <PhoneBook>{fetchData.phone}</PhoneBook>
            <Email>{fetchData.status}</Email>
          </Content>
        </Wrapper>
        <Link to={`/edit/${id}`}>
          {" "}
          <Nav>
            <Icons>
              <GrDocumentUpdate />
            </Icons>
            <span>Edit</span>
          </Nav>
        </Link>
      </Container>
    </Fragment>
  );
};

export default Details;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const Wrapper = styled.div``;

const Icons = styled.div``;

const Image = styled.img`
  width: 300px;
  height: 180px;
  background-color: coral;
  border-radius: 10px;
  object-fit: cover;
`;

const PhoneBook = styled.div`
  margin: 10px 0;
`;

const Name = styled.div`
  margin: 10px 0;
`;

const Email = styled.div`
  margin: 10px 0;
`;
const Content = styled.div``;

const Nav = styled.div`
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
    text-decoration: none;
    transform: scale(1.06);
    outline: none;
  }
  span {
    color: black;
    text-decoration: none;
    outline: none;
  }
`;
