/**
 * JKT48 Live API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 live information with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Live data
 */
const getLive = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.LIVE, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.LIVE, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.LIVE);
};

/**
 * Get JKT48 live information (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Live data
 * @deprecated Use getLive with options object instead
 */
const getLiveLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.LIVE, { apiKey });
};

/**
 * Get JKT48 live information with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Live data
 */
const getLiveWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.LIVE, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getLive,
  getLiveLegacy,
  getLiveWithPriority,
  // Default export for backward compatibility
  default: getLive
};
