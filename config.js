//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6xuv7u.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "254112192119";
global.owner = process.env.OWNER_NUMBER || "254112192119";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kwe3i5.jpg,https://files.catbox.moe/cyvqxl.jpg,https://files.catbox.moe/ex03qs.jpg,https://files.catbox.moe/zrxmeu.jpg,https://files.catbox.moe/onkqum.jpg,https://files.catbox.moe/cgz610.jpg,https://files.catbox.moe/ig9w4q.jpg,https://files.catbox.moe/dd93hl.jpg,https://files.catbox.moe/nwvoq3.jpg,https://files.catbox.moe/omgszj.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0MwamlvcFB0bmk0NmVuVGNmVFFhT3FDTHIyVlY0VWwvdGZzdHJyV1pIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2I0NlVjR3NVRHB4NXR4NitpaG1zM0srSUdOWUg4M1JFM2x2b2g5YVlSdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTkRxeXl3TGsycUxVTWVhUnFkSmh4THRHVTlwYUZvbmFJTS9HZTZDZVZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKTlcwK0NuYU5yWmhyQlVMNlFLRU5LbHNOUmh3dXNBZHNCZk5qaHlROHlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHdTU0MUVkUTZBWlVUcW5OdFZUUUNZWlppUDVoZUkxNkJhSnFCVEkxRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI0bVpjQVFCNDVTN3hQeGpxM0VGVkgyTVNwOWUzbFhVRzYxOVRrL2V2MzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEgxamdRVi92cWk2WTZVVytLbzhISlNLMXppcjE0dnNsYmJKdnVWM0FXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVZieXZTUW9iUkFkZ2JEV21nWklBUHlkZWpoU1hma20wbkFVYnA4eExYQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5SUnNERmpYVHVjWDc0cGF2aW4wUXp0cUl0RzZuMGhPRWlUSFRYNDBjamM1bzFXTUpBejQ0ZGUxNkQyZWhNTjdyRnVZYWZJLzZEUzlWbXhGaGJzMGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6IlJzRHBaa2dzQjgyOTNOUFo5Mm5jYk9MZkE3eTQxU2lRTHpLVEx2a25TQkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImRONDVGQTJuUzhhc0ZqalI1MmJ2c0EiLCJwaG9uZUlkIjoiODJhM2VmODItN2Y4OC00ZWRmLWI5ZTYtZWZkMDE1NTJjOGNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imw1bHhqd2V6dHMwNGhxK0RLajlIemFid3c2MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1Z25vUkNzeGltdkErUlUyNmxENFVnVFJqZWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMzRRRUoxWEoiLCJtZSI6eyJpZCI6IjIzNDcwMTAyMjQ2ODk6MjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTWWszRVFsZGE0dkFZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJaQ1hXTWJYV1BaUmpCT01URzFVSzNJUHUwTVJKT3Q5cEYvT2o2WHlhU2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ild6N2VWWXh6dWpjOFVFMEYrZXRrY0VLbmNNVUlTNllDVW1SNGN0TlpnZDlmeUEvMWtWWWtHZDlrSTJWcVhBbjNiOHprU0UxdkcwL3NMYU52dVpCVkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMd0RLRktaMVBHTStPd2Y3SWxhZ1JyL0FRWXd0UUVPZnZBV25lS3J6djc4SDFBaW8yVThHQkM0RUdDbDA1Mk9JKzdMR1VScHhaak0ycFh6Nkg4dG1oZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMTAyMjQ2ODk6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTJRbDFqRzExajJVWXdUakV4dFZDdHlEN3RERVNUcmZhUmZ6bytsOG1rbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzM3MDQwMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQbXoifQ==// session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
