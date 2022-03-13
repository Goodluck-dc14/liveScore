import React from "react";
import styled from "styled-components";
import HeaderProps from "./HeaderProps";
import img from "../pyy/dstv.png";
import img1 from "../pyy/formula-1.png";
import img2 from "../pyy/ipl-2021.png";
import img3 from "../pyy/italy-serie-a.png";
import img4 from "../pyy/motogp.png";
import img5 from "../pyy/premier-league.png";
import img6 from "../pyy/ryder-cup.png";
import img7 from "../pyy/springboks.png";
import img8 from "../pyy/uefa-champions-league.png";
import img9 from "../pyy/uefa-europa-league.png";
import img10 from "../pyy/spanish-laliga.png";
import img11 from "../pyy/rugby-championship.png";

const Header2 = () => {
  return (
    <Container>
      <HeaderProps img={img} name="Dstv Premiership" />
      <HeaderProps img={img1} name="Formula 1" />
      <HeaderProps img={img2} name="IPL 2021" />
      <HeaderProps img={img3} name="MotoGP" />
      <HeaderProps img={img4} name="Champions League" />
      <HeaderProps img={img5} name="Premier League" />
      <HeaderProps img={img6} name="Ryder Cups" />
      {/* <HeaderProps img={img7} name="Spring boks" />
      <HeaderProps img={img8} name="UEFA Championship" />
      <HeaderProps img={img9} name="UEFA Europa League" />
      <HeaderProps img={img10} name="Spanish Laliga" />
      <HeaderProps img={img11} name="Rugby Championship" /> */}
    </Container>
  );
};

export default Header2;

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
