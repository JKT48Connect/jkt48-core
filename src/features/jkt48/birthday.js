/**
 * JKT48 Birthday API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 members' birthday information with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Birthday data
 */
const getBirthday = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.BIRTHDAY, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.BIRTHDAY, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.BIRTHDAY);
};

/**
 * Get JKT48 members' birthday information (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Birthday data
 * @deprecated Use getBirthday with options object instead
 */
const getBirthdayLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.BIRTHDAY, { apiKey });
};

/**
 * Get JKT48 members' birthday information with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Birthday data
 */
const getBirthdayWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.BIRTHDAY, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getBirthday,
  getBirthdayLegacy,
  getBirthdayWithPriority,
  // Default export for backward compatibility
  default: getBirthday
};
