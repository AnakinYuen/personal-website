export const monthAbbr = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const stndrd = ['st', 'nd', 'rd'];
export const getDate = (date: Date): string => {
  const month = date.getMonth();
  const day = date.getDate();
  return `${monthAbbr[month]} ${day}${stndrd[(day % 10) - 1] || 'th'}`;
};
export const getTime = (date: Date): string => {
  let hours = date.getHours();
  let ampm = 'AM';
  if (hours === 0) {
    hours = 12;
  } else if (hours === 12) {
    ampm = 'PM';
  } else if (hours > 12) {
    hours -= 12;
    ampm = 'PM';
  }
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  return `${hours}:${minutes} ${ampm}`;
};
