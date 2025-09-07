/**
 * JKT48 Theater API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 theater information with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Theater data
 */
const getTheater = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.THEATER, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.THEATER, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.THEATER);
};

/**
 * Get JKT48 theater information (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Theater data
 * @deprecated Use getTheater with options object instead
 */
const getTheaterLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.THEATER, { apiKey });
};

/**
 * Get JKT48 theater information with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Theater data
 */
const getTheaterWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.THEATER, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getTheater,
  getTheaterLegacy,
  getTheaterWithPriority,
  // Default export for backward compatibility
  default: getTheater
};
