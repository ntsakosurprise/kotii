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
  const { componentName, effectsCount } = effectsStore;
  const effectResources = effectsStore[componentName];
  console.log("THE EFFECTS RESOURCES", effectResources);
  const { data = {}, errors = {} } = effectResources;
  console.log("THE EFFECTS DATA ERRORS", data, errors);
  const { userData = null } = data[effectID];
  const { error = null } = errors[effectID];
  const thisEffectErrors = error ? error || null : null;
  const thisEffectData = userData ? userData || null : null;
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

  resetOrIncrementEffectCounter(effectsCount);

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
    if (effectState && data[effectID].isFirstTimeRun) {
      data[effectID].isFirstTimeRun = false;
      if (updaters.length > 0) runUpdaters(updaters);
      return;
    } else if (effectErrorState && errors[effectID].isFirstTimeRun) {
      errors[effectID].isFirstTimeRun = false;
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

const resetOrIncrementEffectCounter = (count) => {
  if (currentEffectID + 1 > count) {
    currentEffectID = 1;
  } else {
    currentEffectID++;
  }
};
