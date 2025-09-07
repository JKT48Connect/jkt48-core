/**
 * JKT48 Live Showroom API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 live Showroom information with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Live Showroom data
 */
const getLiveShowroom = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.LIVE_SHOWROOM, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.LIVE_SHOWROOM, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.LIVE_SHOWROOM);
};

/**
 * Get JKT48 live Showroom information (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Live Showroom data
 * @deprecated Use getLiveShowroom with options object instead
 */
const getLiveShowroomLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.LIVE_SHOWROOM, { apiKey });
};

/**
 * Get JKT48 live Showroom information with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Live Showroom data
 */
const getLiveShowroomWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.LIVE_SHOWROOM, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getLiveShowroom,
  getLiveShowroomLegacy,
  getLiveShowroomWithPriority,
  // Default export for backward compatibility
  default: getLiveShowroom
};
