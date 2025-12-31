/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useHead } from "../HeadProvider/index.jsx";
import { useEffect, useId } from "react";

const Head = ({ title = "", metas = [], links = [], scripts = [] }) => {
  console.log("THE HEAD IS LOADING", title);
  const head = useHead();
  const id = useId();

  const isServer = typeof window == "undefined" ? true : false;
  console.log("IS SERVER", isServer, head);
  const entry = { id, title, metas, links, scripts };
  if (isServer) {
    console.log("THE SERVER RUNS", isServer);
    head.setHeadEntry(entry, id);
  }

  useEffect(() => {
    head.setHeadEntry(entry);

    return () => head.unsetHeadEntry(id);
  }, [title, metas, links, scripts, head]);

  return null;

  // const headContext = useHead();
  // console.log("THE CURRENT HEAD", headContext);

  // if (headContext?.componentHeadEntries) {
  //   console.log("THE HEADCONTEXT PUSH IS DEFINED");
  //   headContext.componentHeadEntries.push({
  //     title,
  //     metas,
  //     links,
  //     scripts,
  //   });
  // }
  // return null;
};

export default Head;
