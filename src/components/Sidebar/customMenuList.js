import * as React from "react";
import MenuList from "@mui/material/MenuList";
import CustomeMenuItem from "./customMenuItem";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";

const nestedHeaderStyles = {
  display: "inline-block",
  verticalAlign: "top",
  width: "48%",
  marginRight: "1%",
};
export default function CustomMenuList({ items }) {
  const [nested, setNested] = React.useState([]);
  const [shouldShowNested, setShowNested] = React.useState(false);

  return (
    <MenuList>
      {items.map((item, i) => {
        if (item.nested) {
          return (
            <div key={i}>
              <h2
                style={{
                  fontSize: "1rem",
                  color: "black",
                  opacity: ".5",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                  cursor: "pointer",
                  "&:hover": {
                    color: "red",
                  },
                }}
                onClick={() => {
                  setShowNested(!shouldShowNested);
                }}
              >
                <span style={{ ...nestedHeaderStyles }}>
                  {shouldShowNested ? <RemoveSharpIcon /> : <AddSharpIcon />}
                </span>
                <span style={{ ...nestedHeaderStyles }}>{item.name}</span>
              </h2>
              {shouldShowNested ? (
                <MenuList>
                  {item.nested.map((nItem, nI) => {
                    return (
                      <CustomeMenuItem
                        name={nItem.name}
                        index={nI}
                        to={nItem.to}
                      />
                    );
                  })}
                </MenuList>
              ) : null}
            </div>
          );
        }
        return <CustomeMenuItem name={item.name} index={i} to={item.to} />;
      })}
    </MenuList>
  );
}
