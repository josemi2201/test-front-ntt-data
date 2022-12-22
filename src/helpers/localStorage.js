export const getLocalStorage = (name, isJson = false) => {

  const value = localStorage.getItem(name);

  return isJson
    ? JSON.parse(value) || {}
    : value;

};

export const setLocalStorage = (name, value, isJson = false) => {

  localStorage.setItem(
    name,
    isJson
      ? JSON.stringify(value)
      : value
  );

};
