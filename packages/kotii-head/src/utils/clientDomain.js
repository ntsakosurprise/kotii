import suku from "suku";
import { compileKotiiHead } from "./compileKotiiHead.js";
export const applyHead = (updateTracker, getEntries) => {
  console.log("The Entries", getEntries());
  let headEntries = getEntries();
  let head = compileKotiiHead(headEntries);
  let document = suku.get_document_head();
  console.log("THE DOCUMENT HEAD", document, "SUKU", suku);
  if (head?.title) document.title = head.title;
  updateTracker.isScheduled = false;
};

export const queueDomUpdate = (updateTracker, getEntries) => {
  updateTracker.isScheduled = true;
  queueMicrotask(() => {
    applyHead(updateTracker, getEntries);
  });
};
