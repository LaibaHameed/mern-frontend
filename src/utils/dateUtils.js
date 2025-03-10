import {DateTime} from 'luxon';

export const getCurrentDate = () => {
  return DateTime.now();
};

export const getDateFromSeconds = ({date}) => {
  return DateTime.fromSeconds(date);
};
