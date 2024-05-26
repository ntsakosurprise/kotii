import { Anchor, Box, Button, Select, TextInput } from "grommet";
import React from "react";

export const DemoSection = () => {
  return (
    <Box
      alignSelf="center"
      border
      background="background-front"
      gap="medium"
      pad="large"
      round="small"
    >
      <Select value="Miney" options={["Eenie", "Meenie", "Miney", "Mo"]} />
      <TextInput placeholder="type something here" background="blue" />
      <Anchor>Im a link</Anchor>
      <Box direction="row" gap="medium">
        <Button label="Click Me" />
      </Box>
    </Box>
  );
};
