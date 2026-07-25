/* eslint-disable react/prop-types */
import { images } from "Assets";
import { CONFIG } from "Config";
// import SearchImage from "../assets/docs_search.png";
// import StonesJPG from "../assets/stones.jpg";
import { loggas } from "kotii-logger";
import { Head, useUniversalEffect, Interactive } from "kotii";
import styled from "kotii-styled";
import React, { useState } from "react";
import { AiFillFile, AiFillFolder } from "react-icons/ai/index.js";
import { FaLongArrowAltRight } from "react-icons/fa/index.js";
import { useDispatch, useSelector } from "react-redux";
import SVGConnections from "../shared/test.jsx";
import names from "../state/places.json";
import Reminder from "../state/reminder.csv";
import User from "../state/user.xml";
import * as actions from "../store/home/actions.js";
import colorStyles from "../styles/color.module.less";
import "../styles/index.css";
import {AppForm} from "Shared"
// import "../global.css"

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
    marginLeft: "11px",
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

// const PeopleList = (props) => {
//   loggas.app.log("THE PROPS TO PEOPLE COMP", props);
//   if (props.people.length > 0)
//     return (
//       <ul>
//         {props.people.map((person, i) => {
//           return <li key={i}>{person}</li>;
//         })}
//       </ul>
//     );
//   return null;
// };
const UserComp = (props) => {
  loggas.app.log("THE PROPS TO PEOPLE COMP", props);
  if (props?.user)
    return (
      <div>
        name: {props.user.name}
        <br />
        username: {props.user.userName}
        <br />
        born: {props.user.born}
        <br />
        status: {props.user.status}
        <br />
      </div>
    );
  return null;
};
const frameworks = ["Astro","Qwik", "Next","Nest", "Django","React","Kotii","Anzii"]

const Index = (test="my test prop") => {
  loggas.app.log("THE ENVIRONMENT CONFIG", CONFIG.GITHUB_APP_ID);
  loggas.app.log("OUR NODE ENV", process.env.NODE_ENV);
  loggas.app.log("OUR IMAGES: SEARCH", images.SearchImage);
  loggas.app.log("OUR IMAGES: STONES", images.StonesJPG);
  loggas.app.log("THE CSV", Reminder);
  loggas.app.log("USER XML", User);
  loggas.app.log("NAMES", names);
  console.log("THE COLOR STYLES", colorStyles);
  // const peopleList = useSelector((state) => {
  //   loggas.app.log("STATE RECEIVED", state);
  //   return state.homeReducer.people;
  // });
  const logMessage = ()=>{
    console.log("Log THE MESSAGE")
  }
  const personName = "MY NAME IS MY NAME"
  const [frameworkName, setFrameworkName] = useState("kotii")
  const [data, error] = useUniversalEffect(runAsEffect, []);
  const [dataTwo, errorTwo] = useUniversalEffect(getRandomNum, []);

  const user = useSelector((state) => {
    loggas.app.log("STATE RECEIVED", state);
    return state.homeReducer.user;
  });
  const dispatch = useDispatch();
  // const doList = () => {
  //   if (peopleList.length <= 0) dispatch(actions.showPeopleList());
  //   dispatch(actions.hidePeopleList());
  // };

  const doUser = () => {
    if (!user) dispatch(actions.showUser());
    dispatch(actions.hidePeopleList());
  };
  loggas.app.log(
    "User data from useUniversalEffect  ffgfgfgfgffgffggfgffggfgfgfgfgffggfgfgffgfggfggffggfgffggfgfgfgggf",
    data,
    error
  );
  return (
    <Main className="app-background">
      {/* <Head title={"Kotii Framework Boilerplate TEST"} /> */}
      <Hero>
        <HeroText>
          Vuxii Kianda, saved, and see your changes reflected in real-time. Get
          started by going to:
        </HeroText>
        {/* <Hero>{names[0]}</Hero> */}
        <Path />
        

        <p>The Current Framework Is: {frameworkName}</p>
        <StyledButton>

          <Interactive>
          <button onClick={()=>{
             var data = frameworkName
             console.log("THE FRAMEWORK NAME", data)
             logMessage()
             console.log("THE PERSONA", personName)
            setFrameworkName(frameworks[Math.floor(Math.random() * (5 - 0 + 1)) + 0])
          }}>Update Framework Name</button>
        </Interactive>

        </StyledButton>
        

        {/* {peopleList ? <PeopleList people={peopleList} /> : null} */}
        {user ? <UserComp user={user} /> : null}
        {/* <p className={`text-color ${colorStyles["green"]}`}>
          The effect DATA: {data?.actor?.age || "nothing"}
        </p> */}
        <p className={`${colorStyles["green"]}`} id="kotii-test-element">
          The effecT DATA: {dataTwo?.actor?.age || "nothing"}
        </p>
        <p id="check-id">The check DATA id: nothing</p>
        <p id="check-id-2">another check DATA id: nothing</p>
        <p id="check-id-3">
          another check DATA id: nothing
          <span>I'm a span with color</span>
          <small>I'm a small with color</small>
          <strong>I'm a strong with color</strong>
          {/* <blockquote>next sibling</blockquote> */}
        </p>
        {/* <p className="text-color-yellow text-lg test-class" id="kotii-test-element">
          The effect DATA: {dataTwo?.actor?.age || "nothing"}
        </p> */}
        <p className="text-color-yellow">THE REGULAR CSS FILE</p>
        <p className="text-2xl">THIS IS TAILWIND CLASS</p>
        <div className="app-background-bg" style={{ width: 300, height: 300 }}>
          <p>THIS IS INCLUDE NESTED</p>
          <div className="app-background-bg-deeply" style={{ width: "80%" }}>
            <p>THIS IS DEEPLY</p>
          </div>
        </div>
        <div>
            <AppForm />
      </div>

        {/* <img src={connectionsSvg} width={50} alt="connections svg" /> */}
      </Hero>
      
      
      <SVG>
        <SVGConnections />
      </SVG>
      <img src={images.SearchImage} width={36} height={36} />
      <img src={images.StonesJPG} width={800} />
    </Main>
  );
};

// export const getServerState = (store) => {
//   return store.dispatch(actions.showPeopleList());
// };

export const getServerState = async (store) => {
  return store.dispatch(actions.showUser());
};
const runAsEffect = () => {
  return new Promise((resolve) => {
    resolve({
      actor: {
        type: "Personal website",
        age: `${Math.floor(Math.random() * 50)} years`,
        owner: "Ntsako Surprise",
        author: "Wix",
        WeeklyViews: 5,
      },
    });
  });

  
};
const getRandomNum = () => {
  return new Promise((resolve) => {
    resolve({
      actor: {
        type: "Personal website",
        age: `${Math.floor(Math.random() * 50)} years`,
        owner: "Ntsako Surprise",
        author: "Wix",
        WeeklyViews: 5,
      },
    });
  });

};

export const universalEffects = [runAsEffect, getRandomNum];

export default Index;
