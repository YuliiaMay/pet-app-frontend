const formattingTitle = (text) => {
  let newFormat = text;
  if (newFormat.length > 15) {
    newFormat = text.slice(0, 21) + "...";
  }
  return newFormat;
};

export default formattingTitle;
