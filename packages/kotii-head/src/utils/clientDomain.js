import suku from "suku";
import { compileKotiiHead } from "./compileKotiiHead.js";
export const applyDocumentTitle = (title) => {
  document.title = title;
};

export const applyHeadChanges = (head) => {
  let document = suku.get_document_head();
  if (head?.title) document.title = head.title;
};
export const applyDirectDomChanges = (updateTracker, getEntries) => {
  let headEntries = getEntries();
  let head = compileKotiiHead(headEntries);

  head?.title ?? applyDocumentTitle(head.title);
  head?.meta || head?.script || head?.link ? applyHeadChanges(head) : null;
  updateTracker.isScheduled = false;
};
export const queueDomUpdate = (updateTracker, getEntries) => {
  updateTracker.isScheduled = true;
  queueMicrotask(() => {
    applyDirectDomChanges(updateTracker, getEntries);
  });
};
