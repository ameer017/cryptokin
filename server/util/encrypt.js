const crypto = require("crypto");
const algorithm = "aes-256-cbc";

const key = crypto.scryptSync(process.env.ENCRYPTION_SECRET, "salt", 32);
const iv = crypto.randomBytes(16);

exports.encryptData = (data) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(JSON.stringify(data), "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
};

exports.decryptData = (encrypted) => {
  const parts = encrypted.split(":");
  const iv = Buffer.from(parts.shift(), "hex");
  const encryptedText = parts.join(":");
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return JSON.parse(decrypted);
};
