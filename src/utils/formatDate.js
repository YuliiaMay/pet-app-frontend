import dateFormat from "dateformat";

function formatDate(date) {
  if (!date) return;
  const now = new Date(date);
  return dateFormat(now, "dd.mm.yyyy");
}

export default formatDate;
