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
    <p>
      <button
        onClick={() => {
          setTestState("THE NEW STATE IS TO");
        }}
      >
        FAQS Button Test
      </button>
    </p>
  );
};

export default Faqs;
