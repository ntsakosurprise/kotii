// @ts-nocheck
import { Head, useUniversalEffect } from "kotii";
// import { CONFIG } from "Config";
import React, { useState } from "react";

const Faqs = () => {
  const [isLoading, setLoadState] = useState(true);
  const [count, setCount] = useState(0);
  const updateLoadingState = () => {
    setLoadState(false);
  };
  const [data, error] = useUniversalEffect(
    universalEffects,
    [count],
    [updateLoadingState]
  );

  // useEffect(() => {
  //   console.log("THE COMPONENT HAS LOADED", test);
  // }, []);
  // useEffect(() => {
  //   console.log("THE COMPONENT STATE HAS CHANGED TO:", test);
  // }, [test]);
  if (isLoading) return <p>Component is Loading</p>;
  return (
    <div>
      <Head title={"Faqs page kotii"} />
      <p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          FAQS Button Test
        </button>
      </p>
      <p>Component Count is: {count}</p>
      <p>The Data from the server {data?.actor?.age}</p>
    </div>
  );
};

export const getStatic = (store) => {
  return store.dispatch(actions.showUser());
};

export const universalEffects = () => {
  return new Promise((resolve, reject) => {
    resolve({
      actor: {
        type: "Personal website",
        age: `${Math.floor(Math.random() * 50)} years`,
        owner: "Ntsako Surprise",
        author: "Wix",
        WeeklyViews: 5,
      },
    });
    // const url = !CONFIG.APP_URL
    //   ? `${process.env.KOTII_APP_URL}/get-portfolio`
    //   : `${CONFIG.APP_URL}/get-portfolio`;
    // try {
    //   fetch(url, { method: "GET" })
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((result) => {
    //       console.log("RESULT FROM.SERVER", result)
    //       resolve(result);
    //     })
    //     .catch((err) => {
    //       console.log("FETCH ERROR", err)
    //       reject(err);
    //     });
    //   // if (!response.ok) {
    //   //   throw new Error(`Response status: ${response.status}`);
    //   // }

    //   // const json = await response.json();
    //   // console.log("rESPONSE AS JSON", json);
    // } catch (error) {
    //   reject(error);
    // }
  });
};

export default Faqs;
