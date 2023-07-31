const formattingTextNews = (text) => {
  let newFormat = text;
  if (newFormat.length > 50) {
    newFormat = text.slice(0, 80) + "...";
  }
  return newFormat;
};

export default formattingTextNews;
