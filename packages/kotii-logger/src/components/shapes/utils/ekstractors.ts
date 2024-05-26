export const extractProperty = (propertyKey, propertySource) => {
  return propertySource[propertyKey] ? propertySource[propertyKey] : false;
};
