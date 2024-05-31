import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export class PasswordHasher {
  static async hashPassword(password: string) {
    return bcrypt.hash(password, SALT_ROUNDS);
  }

  static async comparePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}
