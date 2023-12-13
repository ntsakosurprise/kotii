/* eslint-disable react/prop-types */
import React from "react";
import { AiFillFile, AiFillFolder } from "react-icons/ai/index.js";
import { FaLongArrowAltRight } from "react-icons/fa/index.js";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SVGConnections from "../shared/test.jsx";
import * as actions from "../store/home/actions.js";
const Main = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: "35px",
  justifyContent: "space-between",
  position: "relative",
  // @media only screen and (max-width: 450px)": {
  //   flexDirection: "column",
  // },
});
const Hero = styled("div")(() => {
  return {
    marginLeft: "10px",
    width: "50%",
  };
});

const HeroText = styled("p")(() => {
  return {
    marginLeft: "0",
    fontSize: "50px",
    // width: "90%",
  };
});

const HeroPath = styled("p")(() => {
  return {
    marginLeft: "10px",
    fontSize: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    marginTop: "25px",
  };
});

const PathIcon = styled("small")(() => {
  return {
    marginLeft: "0px",
    fontSize: "20px",
    // width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
});

const PathText = styled("small")(() => {
  return {
    marginLeft: "2px",
    fontSize: "20px",
    // width: "90%",
    color: "#D680FF",
    fontWeight: "bolder",
  };
});

const PathPointer = styled("small")(() => {
  return {
    marginLeft: "2px",
    fontSize: "20px",
    marginTop: "5px",
    // width: "90%",
  };
});

const Path = () => {
  return (
    <div style={{ minWidth: "100px" }}>
      <HeroPath>
        <PathIcon>
          <AiFillFolder color="#00BFA5" />
          <PathText>kotii-app</PathText>
          <PathPointer>
            <FaLongArrowAltRight />
          </PathPointer>
        </PathIcon>
        <PathIcon>
          <AiFillFolder color="#00BFA5" />
          <PathText>src</PathText>
          <PathPointer>
            <FaLongArrowAltRight />
          </PathPointer>
        </PathIcon>

        <PathIcon>
          <AiFillFolder color="#00BFA5" />
          <PathText>components</PathText>
          <PathPointer>
            <FaLongArrowAltRight />
          </PathPointer>
        </PathIcon>

        <PathIcon>
          <AiFillFolder color="#00BFA5" />
          <PathText>pages</PathText>
          <PathPointer>
            <FaLongArrowAltRight />
          </PathPointer>
        </PathIcon>

        <PathIcon>
          <AiFillFile color="#00BFA5" />
          <PathText>index.jsx</PathText>
        </PathIcon>

        {/* <PathPointer>
          <FaLongArrowAltRight />
        </PathPointer> */}
        {/* <PathIcon>
          <AiFillFile color="#00BFA5" />
          <PathText>index.js</PathText>
        </PathIcon> */}
      </HeroPath>
    </div>
  );
};

const StyledButton = styled("button")({
  border: "none",
  width: "150px",
  backgroundColor: "inherit",
  marginTop: "30px",
  cursor: "pointer",
  position: "relative",
});

const ButtonFrontCard = styled("small")({
  backgroundColor: "#00BFA5",
  width: "100%",
  height: "50px",
  display: "flex",
  position: "relative",
  zIndex: 5,
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight: "bolder",
  lineHeight: "3px",
});
const ButtonBackCard = styled("small")({
  backgroundColor: "#F7C02B",
  width: "100%",
  height: "50px",
  display: "flex",
  position: "absolute",
});

const SVG = styled("div")({
  display: "flex",
  width: "50%",
  position: "relative",
});

const PeopleList = (props) => {
  console.log("THE PROPS TO PEOPLE COMP", props);
  if (props.people.length > 0)
    return (
      <ul>
        {props.people.map((person, i) => {
          return <li key={i}>{person}</li>;
        })}
      </ul>
    );
  return null;
};
const Index = () => {
  const peopleList = useSelector((state) => {
    console.log("STATE RECEIVED", state);
    return state.homeReducer.people;
  });
  const dispatch = useDispatch();
  const showUsersList = () => {
    dispatch(actions.showPeopleList());
  };
  return (
    <Main>
      <Hero>
        <HeroText>
          Edit, save, and see your changes reflected in real-time. Get started
          by going to:
        </HeroText>
        <Path />
        <StyledButton>
          <ButtonBackCard />
          <ButtonFrontCard onClick={showUsersList}>Learn More </ButtonFrontCard>
        </StyledButton>

        {peopleList ? <PeopleList people={peopleList} /> : null}
        {/* <img src={connectionsSvg} width={50} alt="connections svg" /> */}
      </Hero>
      <SVG>
        <SVGConnections />
      </SVG>
    </Main>
  );
};

export default Index;
