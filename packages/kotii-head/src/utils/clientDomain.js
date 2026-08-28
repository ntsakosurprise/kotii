import suku from "suku";
import { compileKotiiHead } from "./compileKotiiHead";
export const applyHead = (updateTracker, getEntries) => {
  console.log("The Entries", getEntries());
  //   compileKotiiHead();

  updateTracker.isScheduled = false;
};

export const queueDomUpdate = (updateTracker, getEntries) => {
  updateTracker.isScheduled = true;
  queueMicrotask(applyHead(updateTracker, getEntries));
};
