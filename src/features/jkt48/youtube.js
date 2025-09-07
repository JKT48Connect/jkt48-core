/**
 * JKT48 YouTube API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 YouTube content with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - YouTube data
 */
const getYoutube = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.YOUTUBE, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.YOUTUBE, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.YOUTUBE);
};

/**
 * Get JKT48 YouTube content (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - YouTube data
 * @deprecated Use getYoutube with options object instead
 */
const getYoutubeLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.YOUTUBE, { apiKey });
};

module.exports = {
  getYoutube,
  getYoutubeLegacy,
  // Default export for backward compatibility
  default: getYoutube
};
