const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getFormattedDate = (unixTimestamp) => {
  const dateObj = new Date(unixTimestamp * 1000);
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const formattedTime = `${day}-${month}-${year}`;
  return formattedTime;
};
