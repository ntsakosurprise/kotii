import { useAppContext } from "kotii-scripts";
import { useEffect, useState } from "react";
const effect_id_prefix = "kotii_eff_id_";
let currentEffectID = 1;

export const useUniversalEffect = (
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
  const thisEffectErrors = errors ? errors[effectID] || null : null;
  const thisEffectData = data ? data[effectID] || null : null;
  const [effectState, setEffectState] = useState(thisEffectData);
  const [effectErrorState, setErrorState] = useState(thisEffectErrors);
  if (!effect) {
    throw new Error(
      "useUniversalEfffect requires atleast an effect to be executed"
    );
  }
  if (typeof effect !== "function") {
    throw new Error(
      "useUniversalEffect requires effect argument to be of type: function"
    );
  }
  if (!(dependencies instanceof Array) && !(updaters instanceof Array)) {
    throw new Error(
      "useUniversalEffect requires both dependecies and updaters to be an array"
    );
  }
  if (!data[`${effect_id_prefix}${currentEffectID + 1}`]) {
    currentEffectID = 1;
  } else {
    currentEffectID++;
  }

  if (typeof window === "undefined") {
    console.log(
      "Kotii effect react: store",
      effectsStore,
      "component name",
      componentName
    );
    if (thisEffectErrors) return [null, thisEffectErrors];
    return [thisEffectData, null];
  }

  useEffect(() => {
    if (effectsStore.isFirstTimeRun) {
      console.log("First Time Run on the ");
    } else {
      console.log("HOOKS RUNS ON CLIENT OR THIRD RUN");
    }
    if ((effectState || effectErrorState) && effectsStore.isFirstTimeRun) {
      console.log("HOOK");

      effectsStore.isFirstTimeRun = false;
      if (updaters.length > 0) runUpdaters(updaters);

      return;
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
  }, dependencies);

  return [effectState, effectErrorState];
};

const runUpdaters = (updaters) => {
  console.log("Updaters", updaters);
  updaters.forEach((updater) => {
    console.log("Updaters: updater", updater);
    updater();
  });
};
