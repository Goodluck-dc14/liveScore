import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./img.jpg";
import firebase from "firebase";
import app from "./base";
import { useParams } from "react-router-dom";

const Update = () => {
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
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Friend");
  const [percent, setPercent] = useState(0.00001);
  const [image, setImage] = useState(logo);

  const uploadMyImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("uploaded/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const count = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(count);
      },
      (err) => console.log(err.message),

      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          console.log(URL);
          setAvatar(URL);
        });
      }
    );
  };

  const postData = async () => {
    await app.firestore().collection("phonebookUser").doc(id).update({
      email,
      name,
      phone,
      avatar,
      status,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setEmail("");
    setPhone("");
    setStatus("Friend");
    setImage(logo);
  };

  return (
    <Container>
      {percent === 0.00001 ? (
        <Image src={fetchData.avatar} />
      ) : (
        <Image src={image} />
      )}
      <Label htmlFor="text"> Upload an Image </Label>
      <ImageInput type="file" id="text" onChange={uploadMyImage} />
      <Wrapper>Enter Contact info</Wrapper>
      <Input
        placeholder={fetchData.name}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder={fetchData.email}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        placeholder={fetchData.phone}
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />

      <Select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <option value="Friend">Friend</option>
        <option value="Business">Business</option>
      </Select>

      <Button onClick={postData}>Update</Button>
    </Container>
  );
};

export default Update;

const Div = styled.div`
  width: 100px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  margin: 20px 0;
  background-color: white;
  width: 130px;
  height: 50px;
  font-weight: bold;
  border-radius: 30px;
  outline: none;
  border: 0;
  transition: all 350ms;
  transform: scale(1, 1);

  :hover {
    transform: scale(1.06);
    cursor: pointer;
  }
`;

const Label = styled.label`
  padding: 20px;
  border-radius: 30px;
  background-color: coral;
  color: white;
  margin-bottom: 30px;
`;

const ImageInput = styled.input`
  display: none;
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  margin: 10px 0;
  padding-left: 10px;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 150px;
  height: 40px;
  background-color: coral;
  color: white;
  font-weight: bold;
  padding-left: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 90vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: red;
  margin-bottom: 30px;
  object-fit: cover;
`;
const Wrapper = styled.div``;
