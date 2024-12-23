import { useAppContext } from "kotii-scripts";
import { useState } from "react";
const effect_id_prefix = "kotii_eff_id_";
let currentEffectID = 1;

export const useUniversalEffect = async (
  effect = null,
  dependencies = [],
  updaters = []
) => {
  const effectID = `${effect_id_prefix}${currentEffectID}`;
  const { effectsStore = null } = useAppContext();
  console.log("THE EFFECTS STORE", effectsStore);
  const { componentName } = effectsStore;
  const effectResources = effectsStore[componentName];
  console.log("THE EFFECTS RESOURCES", effectResources);
  const { data, errors = null } = effectResources;
  console.log("THE EFFECTS DATA ERRORS", data, errors);
  const thisEffectErros = errors ? errors[effectID] || null : null;
  const thisEffectData = data ? data[effectID] || null : null;
  const [effectState, setEffectState] = useState(thisEffectData);
  const [effectErrorState, setErrorState] = useState(thisEffectErros);
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
