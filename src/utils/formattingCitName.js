const formattingCitName = (text) => {
  if (!text) return;
  let newFormat = text;
  if (newFormat.length > 6) {
    newFormat = text.slice(0, 4) + "...";
  }
  return newFormat;
};

export default formattingCitName;
