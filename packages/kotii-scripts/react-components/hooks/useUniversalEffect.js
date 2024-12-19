import { useEffect, useState } from "react";

export const useUniversalEffect = (effect = null, dependencies = []) => {
  const [effectState, setEffectState] = useState(null);
  const [effectErrorState, setErrorState] = useState(null);
  if (!effect) {
    throw new Error(
      "useUniversalEfffect requires atleast an effect to be executed"
    );
  }

  if (typeof window !== "undefined") {
    return [effectState, effectErrorState];
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
