/**
 * JKT48 Members API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get all JKT48 members with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Members data
 */
const getMembers = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.MEMBERS, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.MEMBERS, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.MEMBERS);
};

/**
 * Get all JKT48 members (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Members data
 * @deprecated Use getMembers with options object instead
 */
const getMembersLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.MEMBERS, { apiKey });
};

/**
 * Get all JKT48 members with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Members data
 */
const getMembersWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.MEMBERS, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getMembers,
  getMembersLegacy,
  getMembersWithPriority,
  // Default export for backward compatibility
  default: getMembers
};
