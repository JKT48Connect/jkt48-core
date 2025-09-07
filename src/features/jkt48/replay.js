/**
 * JKT48 Replay Theater/Live API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 replay content with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Replay data
 */
const getReplay = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.REPLAY, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.REPLAY, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.REPLAY);
};

/**
 * Get JKT48 replay content (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Replay data
 * @deprecated Use getReplay with options object instead
 */
const getReplayLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.REPLAY, { apiKey });
};

/**
 * Get JKT48 replay content with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Replay data
 */
const getReplayWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.REPLAY, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getReplay,
  getReplayLegacy,
  getReplayWithPriority,
  // Default export for backward compatibility
  default: getReplay
};
