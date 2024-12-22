import { useEffect, useState } from "react";
const dataObject = {};

export const useUniversalEffect = async (effect = null, dependencies = []) => {
  const [effectState, setEffectState] = useState(null);
  const [effectErrorState, setErrorState] = useState(null);
  if (!effect) {
    throw new Error(
      "useUniversalEfffect requires atleast an effect to be executed"
    );
  }

  if (typeof window === "undefined") {
    let effectDataObject = await promisefyEffect(effect);
    console.log("The awaited results", effectDataObject);

    return [effectDataObject.data, effectDataObject.error];
  }

  useEffect(() => {
    if (effectState || effectErrorState) {
      return;
    }
    // effect().then(()=>{

    // }).catc();
  }, dependencies);
  return [effectState, effectErrorState];
};

const promisefyEffect = (effect) => {
  return new Promise((resolve, reject) => {
    effect()
      .then((result) => {
        resolve({ data: result, error: null });
      })
      .catch((err) => {
        reject({
          data: null,
          error: err,
        });
      });
  });
};
