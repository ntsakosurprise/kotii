import React from "react";
import { FiExternalLink } from "react-icons/fi/index.js";
import { MdExplore } from "react-icons/md/index.js";
import styled from "styled-components";

const Items = [
  {
    label: "Docs",
    to: "https://github.com/ntsakosurprise/kotii",
  },
  {
    label: "Ssr",
    to: "https://github.com/ntsakosurprise/kotii",
  },
  {
    label: "Conventions",
    to: "https://github.com/ntsakosurprise/kotii",
  },
  {
    label: "Structure",
    to: "https://github.com/ntsakosurprise/kotii",
  },
];
const AuthorText = styled("a")({
  display: "flex",
  textDecoration: "none",
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
});

const Explores = styled("ul")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  // fontSize: "25px",
  // marginLeft: "10px",
  // color: "white",
  gap: 3,
  flexDirection: "row",
});

const ExploreItem = styled("li")({
  listStyle: "none",
  width: 100 / Items.length + "%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100px",
  padding: 0,
  marigin: 0,
  position: "relative",
  backgroundColor: "#F7C02B",
  flexDirection: "row",
  fontSize: "25px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#00B29A",
    "& a": {
      color: "#F7C02B",
    },
    "& svg": {
      color: "white",
    },
  },
});
const MakerAuthText = styled("small")({
  display: "block",
  fontSize: "50px",
  color: "black",
  marginBotton: "35px",
});

const FooterActionsWrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  alignItems: "center",
  // minHeight: "80px",
  // paddingTop: "25px",
  marginBottom: "5px",
  gap: 50,
});

const Link = styled("a")({
  textDecoration: "none",
  display: "flex",
  backgroundColor: "inherit",
  color: "green",
});

const getItems = () => {
  return Items.map((item, i) => {
    return (
      <ExploreItem key={i}>
        <Link href={item.to} target="_blank">
          {item.label.toUpperCase()}
        </Link>
        <FiExternalLink
          style={{
            position: "absolute",
            right: "10%",
            top: "10px",
            fontSize: "15px",
            color: "green",
            fontWeight: "bolder",
          }}
        />
      </ExploreItem>
    );
  });
};
const FooterActions = () => {
  return (
    <FooterActionsWrapper>
      <AuthorText>
        <MakerAuthText>Explore More Resources</MakerAuthText>
        <MdExplore style={{ fontSize: "30px", color: "#00B29A" }} />
      </AuthorText>
      <Explores>{getItems()}</Explores>
    </FooterActionsWrapper>
  );
};

export default FooterActions;
