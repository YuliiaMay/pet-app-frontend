const convertPhone = (it) => {
  return it.replace(/[.\-/\\\s]/g, "");
};

export default convertPhone;
