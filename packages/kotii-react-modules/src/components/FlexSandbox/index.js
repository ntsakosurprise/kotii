/* eslint-disable react/display-name */
import React from "react";
import styled from "styled-components";

const Sandbox = styled("div")(() => ({
  backgroundColor: "red",
  display: "flex",
  flexDirection: "row",
  height: "600px",
  // flexWrap: "wrap",
  // justifyContent: "center",
  alignContent: "flex-start",
}));

const FlexItem = styled("section")(({ style }) => ({
  backgroundColor: "pink",
  width: "900px",
  height: "150px",
  ...style,
}));

const FlexSandbox = () => {
  return (
    <Sandbox>
      <FlexItem style={{ backgroundColor: "green" }}>1</FlexItem>
      <FlexItem style={{ backgroundColor: "grey" }}>2</FlexItem>
      <FlexItem>3</FlexItem>
      <FlexItem>4</FlexItem>
      <FlexItem>5</FlexItem>
      <FlexItem>6</FlexItem>
      <FlexItem>7</FlexItem>
      <FlexItem>8</FlexItem>
      <FlexItem>9</FlexItem>
      <FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>9</FlexItem>
      <FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem style={{ backgroundColor: "green" }}>1</FlexItem>
      <FlexItem style={{ backgroundColor: "grey" }}>2</FlexItem>
      <FlexItem>3</FlexItem>
      <FlexItem>4</FlexItem>
      <FlexItem>5</FlexItem>
      <FlexItem>6</FlexItem>
      <FlexItem>7</FlexItem>
      <FlexItem>8</FlexItem>
      <FlexItem>9</FlexItem>
      <FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>9</FlexItem>
      <FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem style={{ backgroundColor: "green" }}>1</FlexItem>
      <FlexItem style={{ backgroundColor: "grey" }}>2</FlexItem>
      <FlexItem>3</FlexItem>
      <FlexItem>4</FlexItem>
      <FlexItem>5</FlexItem>
      <FlexItem>6</FlexItem>
      <FlexItem>7</FlexItem>
      <FlexItem>8</FlexItem>
      <FlexItem>9</FlexItem>
      <FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>9</FlexItem>
      <FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem style={{ backgroundColor: "green" }}>1</FlexItem>
      <FlexItem style={{ backgroundColor: "grey" }}>2</FlexItem>
      <FlexItem>3</FlexItem>
      <FlexItem>4</FlexItem>
      <FlexItem>5</FlexItem>
      <FlexItem>6</FlexItem>
      <FlexItem>7</FlexItem>
      <FlexItem>8</FlexItem>
      <FlexItem>9</FlexItem>
      <FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>9</FlexItem>
      <FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
      <FlexItem>12</FlexItem>
    </Sandbox>
  );
};

export default FlexSandbox;
