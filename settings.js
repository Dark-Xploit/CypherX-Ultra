/**
 * Change the MASTER_PASSWORD to something secure
 * This password is required for:
 * - Pairing new sessions
 * - Accessing paired sessions via web
 */

module.exports = {
  MASTER_PASSWORD: "123456",
  
  // Session access code settings(don't change if you don't know what you're doing)
  ACCESS_CODE_LENGTH: 6,
  ACCESS_CODE_EXPIRY: 5 * 60 * 1000,
  
  // Server port
  PORT: process.env.PORT || 3000,
  
  //Your GitHub username(make sure you've forked this bot without changing the name)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
 
};
