/**
 * JKT48 Live IDN API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 live IDN information with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Live IDN data
 */
const getLiveIdn = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.LIVE_IDN, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.LIVE_IDN, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.LIVE_IDN);
};

/**
 * Get JKT48 live IDN information (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Live IDN data
 * @deprecated Use getLiveIdn with options object instead
 */
const getLiveIdnLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.LIVE_IDN, { apiKey });
};

/**
 * Get JKT48 live IDN information with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Live IDN data
 */
const getLiveIdnWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.LIVE_IDN, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getLiveIdn,
  getLiveIdnLegacy,
  getLiveIdnWithPriority,
  // Default export for backward compatibility
  default: getLiveIdn
};
