/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";

const CardDemoHeader = styled("div")(() => ({
  width: "300px",
  margin: "50px auto",
  textAlign: "center",
  "& h1": {
    margin: "0 0 15px",
    padding: "0",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333333",
  },
  "& span": {
    color: "#666666",
    fontSize: "12px",
    "& a": {
      color: "#000000",
      textDecoration: "none",
      "& i": { color: "#e74c3c" },
    },
  },
}));

const Card = styled("div")(() => ({
  width: "50%",
  padding: "0 25px",
  WebktiBoxSizing: "border-box",
  MozBoxSizing: "border-box",
  boxSizing: "border-box",
  cssFloat: "left",
}));
const CardTitle = styled("div")(() => ({
  margin: "0 0 15px",
  color: "#666666",
  fontSize: "18px",
  fontWeight: "bold",
  textTransform: "uppercase",
}));

const CardPost = styled("div")(() => ({
  position: "relative",
  zIndex: 1,
  display: "block",
  background: "#FFFFFF",
  minWidth: "270px",
  height: "470px",
  WebkitBoxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
  MozBoxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
  WebkitTransition: "all 0.3s linear 0s",
  MozTransition: "all 0.3s linear 0s",
  msTransition: "all 0.3s linear 0s",
  OTransition: "all 0.3s linear 0s",
  transition: "all 0.3s linear 0s",
  "& hover .hover": {
    WebkitBoxShadow: "0px 1px 35px 0px rgba(0, 0, 0, 0.3)",
    MozBoxShadow: "0px 1px 35px 0px rgba(0, 0, 0, 0.3)",
    boxShadow: "0px 1px 35px 0px rgba(0, 0, 0, 0.3)",
  },
  "& hover .thumbnail, img": {
    WebkitBoxShadow: "0px 1px 35px 0px rgba(0, 0, 0, 0.3)",
    WebkitTransform: "scale(1.1)",
    MozTransform: "scale(1.1)",
    transform: "scale(1.1)",
  },
}));

const CardThumbnail = styled("div")(() => ({
  background: "#000000",
  height: "400px",
  overflow: "hidden",
}));

const CardThumbnailDate = styled("div")(() => ({
  position: "absolute",
  top: "20px",
  right: "20px",
  zIndex: 1,
  background: "#e74c3c",
  width: "55px",
  height: "55px",
  padding: "12.5px 0",
  WebkitBorderRadius: "100%",
  MozBorderRadius: "100%",
  borderRadius: "100%",
  color: "#FFFFFF",
  fontWeight: 700,
  textAlign: "center",
  WebktiBoxSizing: "border-box",
  MozBoxSizing: "border-box",
  boxSizing: "border-box",
}));

const CardThumbnailDateDay = styled("div")(() => ({
  fontSize: "18px",
}));

const CardThumbnailDateMonth = styled("div")(() => ({
  fontSize: "12px",
  textTransform: "uppercase",
}));

const CardThumbnailImage = styled("img")(() => ({
  display: "block",
  width: "120%",
  WebkitTransition: "all 0.3s linear 0s",
  MozTransition: "all 0.3s linear 0s",
  msTransition: "all 0.3s linear 0s",
  OTransition: "all 0.3s linear 0s",
  transition: "all 0.3s linear 0s",
}));

const CardPostContent = styled("div")(() => ({
  position: "absolute",
  bottom: "0",
  background: "#FFFFFF",
  width: "100%",
  padding: "30px",
  WebktiBoxSizing: "border-box",
  MozBoxSizing: "border-box",
  boxSizing: "border-box",
  WebkitTransition: "all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s",
  MozTransition: "all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s",
  msTransition: "all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s",
  OTransition: "all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s",
  transition: "all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s",
}));

const CardPostContentCategory = styled("div")(() => ({
  position: "absolute",
  top: "-34px",
  left: "0",
  background: "#e74c3c",
  padding: "10px 15px",
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "uppercase",
}));

const CardPostContentTitle = styled("div")(() => ({
  margin: "0",
  padding: "0 0 10px",
  color: "#333333",
  fontSize: "26px",
  fontWeight: 700,
}));

const CardPostContentSubTitle = styled("div")(() => ({
  margin: "0",
  padding: "0 0 20px",
  color: "#e74c3c",
  fontSize: "20px",
  fontWeight: 400,
}));

const CardPostContentDesc = styled("div")(() => ({
  display: "none",
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.8em",
}));

const CardPostContentMeta = styled("div")(() => ({
  margin: "30px 0 0",
  color: "#999999",
  "& a": { color: "#999999", textDecoration: "none" },
}));
const DemoCard = () => {
  return (
    <>
      <div className="container">
        {/* <CardDemoHeader>
          <h1>React Card Demo</h1>
          <span>
            Made with <i className="fa fa-heart animated infinite pulse"></i> by{" "}
            <a href="#">Deven</a>
          </span>
        </CardDemoHeader> */}
        <Card>
          <CardTitle>Nomarl</CardTitle>

          <CardPost>
            <CardThumbnail>
              <CardThumbnailDate>
                <CardThumbnailDateDay>27</CardThumbnailDateDay>
                <CardThumbnailDateMonth>Mar</CardThumbnailDateMonth>
              </CardThumbnailDate>
              <CardThumbnailImage src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
            </CardThumbnail>
            <CardPostContent>
              <CardPostContentCategory>Photos</CardPostContentCategory>
              <CardPostContentTitle>
                City Lights in New York
              </CardPostContentTitle>
              <CardPostContentSubTitle>
                The city that never sleeps.
              </CardPostContentSubTitle>
              <CardPostContentDesc>
                {" "}
                New York, the largest city in the U.S., is an architectural
                marvel with plenty of historic monuments, magnificent buildings
                and countless dazzling skyscrapers.
              </CardPostContentDesc>
              <CardPostContentMeta>
                <span className="timestamp">
                  <i className="fa fa-clock-">o</i>6 mins ago
                </span>
                <span className="comments">
                  <i className="fa fa-comments"></i>
                  <a href="#">39 comments</a>
                </span>
              </CardPostContentMeta>
            </CardPostContent>
          </CardPost>
        </Card>
      </div>
    </>
  );
};

export default DemoCard;
