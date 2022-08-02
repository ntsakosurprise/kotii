/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useLoadMD = ({ fileName }) => {
  const [mdContent, setMDContent] = useState({ md: "" });

  useEffect(() => {
    fetch(fileName)
      .then((res) => res.text())
      .then((md) => setMDContent({ md }));
  }, []);

  return mdContent;
};

export default useLoadMD;
