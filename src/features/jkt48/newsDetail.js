/**
 * JKT48 News Detail API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 news detail by ID with enhanced authentication support
 * 
 * @param {string} id - News ID
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - News detail
 */
const getNewsDetail = async (id, auth) => {
  validateParam('News ID', id);
  
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
  return await makeRequest(ENDPOINTS.NEWS_DETAIL(id), options);
};

/**
 * Get JKT48 news detail by ID (legacy function for backward compatibility)
 * 
 * @param {string} id - News ID
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - News detail
 * @deprecated Use getNewsDetail with options object instead
 */
const getNewsDetailLegacy = async (id, apiKey) => {
  validateParam('News ID', id);
  return await makeRequest(ENDPOINTS.NEWS_DETAIL(id), { apiKey });
};

/**
 * Get JKT48 news detail by ID with priority token only
 * 
 * @param {string} id - News ID
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - News detail
 */
const getNewsDetailWithPriority = async (id, priorityToken) => {
  validateParam('News ID', id);
  validateParam('priorityToken', priorityToken);
  return await makeRequest(ENDPOINTS.NEWS_DETAIL(id), {
    priorityToken: priorityToken
  });
};

module.exports = {
  getNewsDetail,
  getNewsDetailLegacy,
  getNewsDetailWithPriority,
  // Default export for backward compatibility
  default: getNewsDetail
};
