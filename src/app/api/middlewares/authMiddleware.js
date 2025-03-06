import {headers} from 'next/headers';
import {getCurrentDate, getDateFromSeconds} from '@/utils/dateUtils';
import {verifyToken} from '@/utils/jwtUtils';

export default async () => {
  const headersList = await headers();

  const authorizationHeader = headersList.get('authorization');
  if (!authorizationHeader) {
    return {isTokenExpired: true, user: null};
  }

  const token = authorizationHeader.split(' ')[1];
  if (!token) {
    return {isTokenExpired: true, user: null};
  }

  const decodedData = verifyToken(token);
  if (!decodedData) {
    return {isTokenExpired: true, user: null};
  }

  const expDate = getDateFromSeconds({date: decodedData.exp});
  if (getCurrentDate() > expDate) {
    return {isTokenExpired: true, user: null};
  }

  return {
    isTokenExpired: false,
    user: {_id: decodedData._id, email: decodedData.email},
  };
};
