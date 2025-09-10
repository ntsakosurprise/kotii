import React from "react";
import Icon from "@material-ui/core/Icon";
import FolderIcon from "@material-ui/icons/Folder";
const FolderButton = () => {
  return (
    <button className="home__hero__shapes--content-fds-btn">
      <span className="home__hero__shapes--content-fds-btn-ic">
        <Icon>
          <FolderIcon style={{ fontSize: "3rem" }} />
        </Icon>
      </span>
      <span className="home__hero__shapes--content-fds-btn-tx">redux</span>
    </button>
  );
};

export default FolderButton;
