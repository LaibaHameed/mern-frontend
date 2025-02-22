import jwt from 'jsonwebtoken';

const SECRET = process.env.NEXT_PUBLIC_TOKEN_SECRET;

export const generateToken = (payload) => {
  return jwt.sign(payload, SECRET);
};
