/**
 * Constants used throughout the JKT48 API client
 */

const BASE_URL = 'https://v2.jkt48connect.com/api';

const ENDPOINTS = {
  MEMBERS: '/jkt48/members',
  BIRTHDAY: '/jkt48/birthday',
  EVENTS: '/jkt48/events',
  RECENT: '/jkt48/recent',
  REPLAY: '/jkt48/replay',
  RECENT_DETAIL: (liveId) => `/jkt48/recent/${liveId}`,
  LIVE: '/jkt48/live',
  LIVE_YOUTUBE: '/jkt48/live/youtube',
  YOUTUBE: '/jkt48/youtube',
  LIVE_IDN: '/jkt48/live/idn',
  LIVE_SHOWROOM: '/jkt48/live/showroom',
  MEMBER_DETAIL: (name) => `/jkt48/member/${encodeURIComponent(name)}`,
  NEWS: '/jkt48/news',
  NEWS_DETAIL: (id) => `/jkt48/news/${id}`,
  THEATER: '/jkt48/theater',
  THEATER_DETAIL: (id) => `/jkt48/theater/${id}`,
  CHAT_STREAM: (username, slug) => `/jkt48/chat-stream?username=${encodeURIComponent(username)}&slug=${encodeURIComponent(slug)}`,
  CHAT_STREAM_SR: (roomId) => `/jkt48/chat-stream-sr?room_id=${encodeURIComponent(roomId)}`,
  CHECK: '/zenova/check',
  
  // Admin endpoints
  ADMIN_KEYS: '/admin/keys?username=vzy&password=vzy',
  ADMIN_KEY_DETAIL: (key) => `/admin/key/${encodeURIComponent(key)}?username=vzy&password=vzy`,
  ADMIN_UPDATE_KEY: (key, active, type) => `/admin/update-key?username=vzy&password=vzy&key=${encodeURIComponent(key)}&active=${active}&type=${encodeURIComponent(type)}`,
  ADMIN_DELETE_KEY: (key) => `/admin/key/${encodeURIComponent(key)}?username=vzy&password=vzy`,
  ADMIN_STATS: '/admin/stats?username=vzy&password=vzy',
  ADMIN_CREATE_KEY: (owner, email, type = '', apikey = '') => {
    let endpoint = `/admin/create-key?username=vzy&password=vzy&owner=${encodeURIComponent(owner)}&email=${encodeURIComponent(email)}`;
    if (type) endpoint += `&type=${encodeURIComponent(type)}`;
    if (apikey) endpoint += `&apikey=${encodeURIComponent(apikey)}`;
    return endpoint;
  },
  ADMIN_ADD_LIMIT: (key, additionalLimit) => `/admin/add-limit?username=vzy&password=vzy&key=${encodeURIComponent(key)}&additionalLimit=${encodeURIComponent(additionalLimit)}`,
  ADMIN_ADD_EXPIRY: (key, additionalDays) => `/admin/add-expiry?username=vzy&password=vzy&key=${encodeURIComponent(key)}&additionalDays=${encodeURIComponent(additionalDays)}`,

  // Changelog endpoints
  CREATE_CHANGELOG: '/database/create-changelog?username=vzy&password=vzy&apikey=JKTCONNECT',
  CHANGELOGS: '/database/changelogs?username=vzy&password=vzy&apikey=JKTCONNECT',
  CHANGELOG_DETAIL: (id) => `/database/changelog/${id}?username=vzy&password=vzy&apikey=JKTCONNECT`,
  UPDATE_CHANGELOG: (id) => `/database/changelog/${id}?username=vzy&password=vzy&apikey=JKTCONNECT`,
  DELETE_CHANGELOG: (id) => `/database/changelog/${id}?username=vzy&password=vzy&apikey=JKTCONNECT`,
  
  //Grow A Garden
  STOCK: '/growagarden/stock',
  WEATHER: '/growagarden/weather',
  RESTOCK: '/growagarden/restock-timer',
  ALL: '/growagarden/all'
  
};

module.exports = {
  BASE_URL,
  ENDPOINTS
};
