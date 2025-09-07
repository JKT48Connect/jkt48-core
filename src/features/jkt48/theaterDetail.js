/**
 * JKT48 Theater Detail API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 theater detail by ID with enhanced authentication support
 * 
 * @param {string} id - Theater ID
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Theater detail
 */
const getTheaterDetail = async (id, auth) => {
  validateParam('Theater ID', id);
  
  let options = {};
  
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    options = { apiKey: auth };
  }
  // Handle new object-based authentication
  else if (typeof auth === 'object' && auth !== null) {
    options = auth;
  }
  
  // Make request with appropriate authentication
  return await makeRequest(ENDPOINTS.THEATER_DETAIL(id), options);
};

/**
 * Get JKT48 theater detail by ID (legacy function for backward compatibility)
 * 
 * @param {string} id - Theater ID
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Theater detail
 * @deprecated Use getTheaterDetail with options object instead
 */
const getTheaterDetailLegacy = async (id, apiKey) => {
  validateParam('Theater ID', id);
  return await makeRequest(ENDPOINTS.THEATER_DETAIL(id), { apiKey });
};

/**
 * Get JKT48 theater detail by ID with priority token only
 * 
 * @param {string} id - Theater ID
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Theater detail
 */
const getTheaterDetailWithPriority = async (id, priorityToken) => {
  validateParam('Theater ID', id);
  validateParam('priorityToken', priorityToken);
  return await makeRequest(ENDPOINTS.THEATER_DETAIL(id), {
    priorityToken: priorityToken
  });
};

module.exports = {
  getTheaterDetail,
  getTheaterDetailLegacy,
  getTheaterDetailWithPriority,
  // Default export for backward compatibility
  default: getTheaterDetail
};
