import { useAppContext } from "kotii-scripts";
import { useState } from "react";
const effect_id_prefix = "kotii_eff_id_";
let currentEffectID = 1;

export const useUniversalEffect = async (effect = null, dependencies = []) => {
  const effectID = `${effect_id_prefix}${currentEffectID}`;
  const effectStore = useAppContext();
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

  effect()
    .then((data) => {
      console.log("THE EFFECT RE-RERUNS");
      setEffectState(data);
      if (updaters.length > 0) runUpdaters(updaters);
    })
    .catch((err) => {
      console.log("THE EFFECT RE-RERUNS: Error", err);
      setErrorState(err);
      if (updaters.length > 0) runUpdaters(updaters);
    });
  return [effectState, effectErrorState];
};

const runUpdaters = (updaters) => {
  console.log("Updaters", updaters);
  updaters.forEach((updater) => {
    console.log("Updaters: updater", updater);
    updater();
  });
};
