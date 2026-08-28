/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useHead } from "../HeadProvider/index.jsx";
import { useEffect, useId, useRef } from "react";

const Head = ({ title = "", metas = [], links = [], scripts = [] }) => {
  const head = useHead();
  const id = useId();

  // Cache the initial values so the server can access them deterministically during the execution string resolution
  const isServer = typeof window === "undefined";

  // Construct the static metadata slice data entry structure
  const entry = { id, title, metas, links, scripts };
  console.log("THE CURRENT ENTRY", entry);

  if (isServer && head) {
    // Safe for server rendering pass extraction
    head.setHeadEntry(entry);
  }

  // Create primitive string dependency maps to prevent fresh inline array references ([]) from forcing infinite re-runs
  const metasString = JSON.stringify(metas);
  const linksString = JSON.stringify(links);
  const scriptsString = JSON.stringify(scripts);

  useEffect(() => {
    console.log("USE EFFECT RUNNNG", head);
    if (!head) return;

    // Register or update the client head configuration node instance
    head.setHeadEntry({ id, title, metas, links, scripts });

    // Clean up lifecycle: When a component unmounts or a route drops, the entry removes itself safely
    return () => {
      console.log("HEAD IN CONTEXT UNMOUNTING");
      head.unsetHeadEntry(id);
    };
  }, [title, metasString, linksString, scriptsString, head, id]);

  return null;
};

export default Head;
