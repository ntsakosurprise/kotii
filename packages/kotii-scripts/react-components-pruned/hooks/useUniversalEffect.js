import { useAppContext } from "kotii-scripts";
import { useEffect, useState } from "react";
const effect_id_prefix = "kotii_eff_id_";
let currentEffectID = 1;
export const useUniversalEffect = function () {
  let effect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let updaters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const effectID = `${effect_id_prefix}${currentEffectID}`;
  const {
    effectsStore = null
  } = useAppContext();
  console.log("THE EFFECTS STORE", effectsStore);
  const {
    componentName = "",
    effectsCount = ""
  } = !effectsStore ? {} : effectsStore;
  const effectResources = !componentName ? {} : effectsStore[componentName];
  const {
    data = {},
    errors = {}
  } = effectResources;
  const currentEffectData = data[effectID] ? data[effectID] : null;
  const currentEffecterror = errors[effectID] ? errors[effectID] : null;
  const thisEffectData = currentEffectData ? currentEffectData.userData : null;
  const thisEffectErrors = currentEffecterror ? currentEffecterror.error : null;
  const [effectState, setEffectState] = useState(thisEffectData);
  const [effectErrorState, setErrorState] = useState(thisEffectErrors);
  if (!effect) {
    throw new Error("useUniversalEfffect requires atleast an effect to be executed");
  }
  if (typeof effect !== "function") {
    throw new Error("useUniversalEffect requires effect argument to be of type: function");
  }
  if (!(dependencies instanceof Array) && !(updaters instanceof Array)) {
    throw new Error("useUniversalEffect requires both dependecies and updaters to be an array");
  }
  resetOrIncrementEffectCounter(effectsCount);
  if (typeof window === "undefined") {
    if (thisEffectErrors) return [null, thisEffectErrors];
    return [thisEffectData, null];
  }
  useEffect(() => {
    if (effectState && currentEffectData.isFirstTimeRun) {
      currentEffectData.isFirstTimeRun = false;
      if (updaters.length > 0) runUpdaters(updaters);
      return;
    } else if (effectErrorState && currentEffecterror.isFirstTimeRun) {
      currentEffecterror.isFirstTimeRun = false;
      if (updaters.length > 0) runUpdaters(updaters);
      return;
    }
    effect().then(data => {
      setEffectState(data);
      if (updaters.length > 0) runUpdaters(updaters);
    }).catch(err => {
      setErrorState(err);
      if (updaters.length > 0) runUpdaters(updaters);
    });
  }, dependencies);
  return [effectState, effectErrorState];
};
const runUpdaters = updaters => {
  updaters.forEach(updater => {
    updater();
  });
};
const resetOrIncrementEffectCounter = count => {
  if (currentEffectID + 1 > count) {
    currentEffectID = 1;
  } else {
    currentEffectID++;
  }
};