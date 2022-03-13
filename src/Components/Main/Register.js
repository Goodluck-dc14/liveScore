import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import app from "../../base";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [image, setImage] = useState("/images/1.png");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(false);
  const history = useHistory();
  const toggle = () => {
    setShow(!show);
  };

  const displayImg = async (e) => {
    const file = e.target.files[0];
    const fileRef = app.storage().ref();
    const storageRef = fileRef.child("avatarChart/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counted = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(Math.floor(counted));
      },
      (err) => console.log(err.message),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setImage(URL);
          console.log(URL);
        });
      }
    );
  };

  const signUp = async () => {
    const signedUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await app.firestore().collection("practice").doc(signedUser.user.uid).set({
      name: name,
      email: email,
      image: image,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setImage("/images/1.png");
    setEmail("");
    setName("");
    setPassword("");
    history.push("/");
  };

  const signIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    history.push("/");
  };

  const googleSign = async () => {
    const Provider = new firebase.auth.GoogleAuthProvider();
    const authUser = await app.auth().signInWithPopup(Provider);
    // console.log(authUser);

    if (authUser) {
      await app
        .firestore()
        .collection("dataBaseUsers")
        .doc(authUser.user.uid)
        .set({
          email: authUser.user.email,
          name: authUser.user.displayName,
          avatar: authUser.user.photoURL,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          createdBy: authUser.user.uid,
        });
    }
    history.push("/");
  };

  return (
    <Container>
      {!show ? (
        <Wrapper>
          <Left>
            <Top>Create Account:</Top>
            <Inputs>
              <Inputer type="file" onChange={displayImg} />
              <Inputer
                placeholder="UserName"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Inputer
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Inputer
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Inputs>
            <Buttons>
              <Button1 onClick={signUp}>Sign Up</Button1>
              <span>or</span>
              <Button2 onClick={googleSign}>
                <img src="/images/google.png" />
                <span>Sign In With Goggle</span>
              </Button2>
            </Buttons>
            <Alt>
              Already have an account? <span onClick={toggle}>Sign In</span>
            </Alt>
          </Left>
          <Right>
            <RightImage src={image} />
            {percent > 0 && percent < 99.999 ? (
              <Percentage>{percent}</Percentage>
            ) : null}
          </Right>
        </Wrapper>
      ) : (
        <Wrapper>
          <Left>
            <Top>Log In</Top>
            <Inputs>
              <Inputer
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Inputer
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Inputs>
            <Buttons>
              <Button1 onClick={signIn}>Sign In</Button1>
              <span>or</span>
              <Button2 onClick={googleSign}>
                <img src="/images/google.png" />
                <span>Sign In With Goggle</span>
              </Button2>
            </Buttons>
            <Alt>
              Don't have an account? <span onClick={toggle}>Sign In</span>
            </Alt>
          </Left>
          <Right>
            <RightImage src={image} />
            {percent > 0 && percent < 99.999 ? (
              <Percentage>{percent}</Percentage>
            ) : null}
          </Right>
        </Wrapper>
      )}
    </Container>
  );
};

export default Register;

const Percentage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.5);
  color: white;
`;

const RightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Alt = styled.div`
  margin-top: 30px;
  span {
    color: red;
    cursor: pointer;
  }
`;

const Button2 = styled(Button)`
  width: 300px;
  background-color: black;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 30px;
    margin-right: 10px;
  }
`;

const Button1 = styled(Button)`
  width: 300px;
  background-color: rgba(252, 0, 0, 0.7);
  border: none;
  color: white;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Inputer = styled(Input)`
  margin-bottom: 15px;
  width: 300px;
  /* margin-left: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 40px; */
`;

const Inputs = styled.div``;

const Top = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin: 20px;
  /* background-color: white; */
  width: 100%;
  margin-left: 60px;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  background: #5c49d7;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 750px;
  height: 450px;
  background: white;
  display: flex;
  border: black 1px solid;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gainsboro;
`;
