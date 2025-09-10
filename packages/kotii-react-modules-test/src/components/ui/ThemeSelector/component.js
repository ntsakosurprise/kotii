/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTheme } from "Hooks";
import { getFromStorage } from "kotii-utils";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ThemedButton = styled.button`
  border: 0;
  display: inline-block;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 4px;
  margin-top: 5px;
  width: 100%;
  cursor: pointer;
`;

const Wrapper = styled.li`
  padding: 48px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #000;
  list-style: none;
`;

const Container = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3rem;
  padding: 10px;
`;

const Header = styled.h2`
  display: flex;
  justify-content: space-around;
`;

export const ThemeSelector = (props) => {
  const themesFromStore = getFromStorage("themes");
  const [data, setData] = useState(themesFromStore);
  const [themes, setThemes] = useState([]);
  const { setThemeMode } = useTheme();

  const themeSwitcher = (selectedTheme) => {
    console.log(selectedTheme);
    setThemeMode(selectedTheme);
    props.setter(selectedTheme);
  };

  useEffect(() => {
    setThemes(_.keys(data));
  }, [data]);

  useEffect(() => {
    props.newTheme && updateThemeCard(props.newTheme);
  }, [props.newTheme]);

  const updateThemeCard = (theme) => {
    const key = _.keys(theme)[0];
    const updated = { ...data, [key]: theme[key] };
    setData(updated);
  };

  const ThemeCard = (props) => {
    return (
      <Wrapper
        style={{
          backgroundColor: `${props.theme.colors.body}`,
          color: `${props.theme.colors.text}`,
          fontFamily: `${props.theme.font}`,
        }}
      >
        <span>Click on the button to set this theme</span>
        <ThemedButton
          onClick={(theme) => themeSwitcher(props.theme)}
          style={{
            backgroundColor: `${props.theme.colors.button.background}`,
            color: `${props.theme.colors.button.text}`,
            fontFamily: `${props.theme.font}`,
          }}
        >
          {props.theme.name}
        </ThemedButton>
      </Wrapper>
    );
  };

  return (
    <div>
      <Header>Select a Theme from below</Header>
      <Container>
        {themes.length > 0 &&
          themes.map((theme) => (
            <ThemeCard theme={data[theme]} key={data[theme].id} />
          ))}
      </Container>
    </div>
  );
};
