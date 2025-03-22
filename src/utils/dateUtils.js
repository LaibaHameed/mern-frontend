import {DateTime} from 'luxon';

export const getCurrentDate = () => {
  return DateTime.now();
};

export const getDateFromSeconds = ({date}) => {
  return DateTime.fromSeconds(date);
};

export const getMonthYearDate = ({date}) => {
  console.log(date);
  return DateTime.fromISO(date).toFormat('MMM d, yyyy');
};
