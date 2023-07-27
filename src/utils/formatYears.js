function formatYears(date) {
  if (!date) return;
  const nowDate = new Date();

  const today = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate()
  );
  const dob = new Date(date);
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

  let age;

  age = today.getFullYear() - dob.getFullYear();
  if (today < dobnow) {
    age = age - 1;
  }

  return age;
}

export default formatYears;
