

const {hash, compare} = require("bcryptjs");

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password, passwordHash) {
  const verifiedPassword = await compare(password, passwordHash);
  return verifiedPassword;
}

export {hashPassword, verifyPassword};
