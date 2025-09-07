/**
 * JKT48 News API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 news information with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - News data
 */
const getNews = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.NEWS, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.NEWS, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.NEWS);
};

/**
 * Get JKT48 news information (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - News data
 * @deprecated Use getNews with options object instead
 */
const getNewsLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.NEWS, { apiKey });
};

/**
 * Get JKT48 news information with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - News data
 */
const getNewsWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.NEWS, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getNews,
  getNewsLegacy,
  getNewsWithPriority,
  // Default export for backward compatibility
  default: getNews
};
