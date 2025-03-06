import jwt from 'jsonwebtoken';

const SECRET = process.env.NEXT_PUBLIC_TOKEN_SECRET;

export const generateToken = (payload) => {
  return jwt.sign(payload, SECRET, {expiresIn: '1d'});
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};
