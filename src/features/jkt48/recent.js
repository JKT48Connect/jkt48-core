/**
 * JKT48 Recent API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 recent activities with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Recent activities data
 */
const getRecent = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.RECENT, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.RECENT, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.RECENT);
};

/**
 * Get JKT48 recent activities (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Recent activities data
 * @deprecated Use getRecent with options object instead
 */
const getRecentLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.RECENT, { apiKey });
};

/**
 * Get JKT48 recent activities with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Recent activities data
 */
const getRecentWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.RECENT, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getRecent,
  getRecentLegacy,
  getRecentWithPriority,
  // Default export for backward compatibility
  default: getRecent
};
