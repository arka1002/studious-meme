const isEmpty = (variable: any): boolean => {
  if (typeof variable === "number") {
    return variable < 0;
  }
  return (
    !variable ||
    false ||
    variable === "" ||
    (Array.isArray(variable) && variable.length === 0) ||
    Object.keys(variable).length === 0
  ); // for objects
};

export { isEmpty };
