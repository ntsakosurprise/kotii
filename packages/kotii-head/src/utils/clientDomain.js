export const applyHead = (updateTracker) => {};
export const calculateUpdateApplyTime = (updateTracker) => {};
export const queueDomUpdate = (updateTracker) => {
  queueMicrotask(calculateUpdateApplyTime(updateTracker));
};
