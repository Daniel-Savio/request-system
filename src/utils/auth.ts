import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 8;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const generateToken = (payload: object) => {
  return jwt.sign(payload, jwtSecret, { expiresIn: '1 day' });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    return null;
  }
};
