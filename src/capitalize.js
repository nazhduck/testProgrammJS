const capitalize = (string) => {
  if (string === "") {
    return "";
  }
  const firstChar = string[0].toUpperCase();
  const restSubstring = string.slice(1).toLowerCase();
  return `${firstChar}${restSubstring}`;
};

export default capitalize;
