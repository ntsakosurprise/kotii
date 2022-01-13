import React from "react";
import Icon from "@material-ui/core/Icon";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import FolderIcon from "@material-ui/icons/Folder";
import FolderButton from "./btn";
const HeroShapes = () => {
  return (
    <section className="home__hero__shapes">
      <div className="home__hero__shapes--1"></div>
      <div className="home__hero__shapes--2"></div>
      <div className="home__hero__shapes--3">
        <section className="home__hero__shapes--content">
          <div className="home__hero__shapes--content-st">
            <Icon>
              <AccountTreeIcon style={{ fontSize: "10rem", color: "white" }} />
            </Icon>
          </div>
          <div className="home__hero__shapes--content-fds">
            <FolderButton />
            <FolderButton />
            <FolderButton />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroShapes;
