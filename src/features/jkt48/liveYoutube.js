/**
 * JKT48 Live YouTube API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 live YouTube information with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Live YouTube data
 */
const getLiveYoutube = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.LIVE_YOUTUBE, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.LIVE_YOUTUBE, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.LIVE_YOUTUBE);
};

/**
 * Get JKT48 live YouTube information (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Live YouTube data
 * @deprecated Use getLiveYoutube with options object instead
 */
const getLiveYoutubeLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.LIVE_YOUTUBE, { apiKey });
};

/**
 * Get JKT48 live YouTube information with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Live YouTube data
 */
const getLiveYoutubeWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.LIVE_YOUTUBE, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getLiveYoutube,
  getLiveYoutubeLegacy,
  getLiveYoutubeWithPriority,
  // Default export for backward compatibility
  default: getLiveYoutube
};
