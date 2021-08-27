import { genSaltSync, hashSync } from 'bcrypt';

export const hasher = async (password: string): Promise<string> => {
  const salt = genSaltSync();
  return hashSync(password, salt);
};
