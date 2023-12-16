import { Head } from "kotii-scripts";
import React, { useEffect, useState } from "react";
const Faqs = () => {
  const [test, setTestState] = useState(`It's a test state`);
  useEffect(() => {
    console.log("THE COMPONENT HAS LOADED", test);
  }, []);
  useEffect(() => {
    console.log("THE COMPONENT STATE HAS CHANGED TO:", test);
  }, [test]);
  return (
    <div>
      <Head title={"Faqs page kotii"} />
      <p>
        <button
          onClick={() => {
            setTestState("THE NEW STATE IS TO");
          }}
        >
          FAQS Button Test
        </button>
      </p>
    </div>
  );
};

export default Faqs;
