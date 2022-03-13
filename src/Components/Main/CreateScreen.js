import React, { useState } from "react";
import styled from "styled-components";
import app from "../../base";
import logo from "./avatar.jpg";
import firebase from "firebase";

const CreateScreen = () => {
  const [avatar, setAvatar] = useState("");
  const [image, setImage] = useState(logo);
  const [percent, setPercent] = useState(0.00001);

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

  return (
    <Container>
      <Wrapper>
        <MainComp>
          <MainContainer>
            <Card>
              <Image src={image} />
              <Label htmlFor="text"> Upload an Image </Label>
              <ImageInput type="file" id="text" onChange={uploadMyImage} />
            </Card>
            <Card>card</Card>
          </MainContainer>
        </MainComp>
      </Wrapper>
    </Container>
  );
};

export default CreateScreen;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  min-height: 90vh;
  height: 100%;
  background-color: lightgray;
`;

const Wrapper = styled.div`
  min-height: 90vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MainComp = styled.div`
  width: 80%;
  min-height: 80vh;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Card = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding-bottom: 30px;
  height: 100%;
  margin: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Label = styled.label`
  padding: 20px;
  border-radius: 30px;
  background-color: #103464;
  color: white;
  margin-bottom: 30px;
`;

const ImageInput = styled.input`
  display: none;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: red;
  margin-bottom: 30px;
  object-fit: cover;
`;
