/**
 * JKT48 Member Detail API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 member detail by name with enhanced authentication support
 * 
 * @param {string} name - Member name
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Member detail
 */
const getMemberDetail = async (name, auth) => {
  validateParam('Member name', name);
  
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
  return await makeRequest(ENDPOINTS.MEMBER_DETAIL(name), options);
};

/**
 * Get JKT48 member detail by name (legacy function for backward compatibility)
 * 
 * @param {string} name - Member name
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Member detail
 * @deprecated Use getMemberDetail with options object instead
 */
const getMemberDetailLegacy = async (name, apiKey) => {
  validateParam('Member name', name);
  return await makeRequest(ENDPOINTS.MEMBER_DETAIL(name), { apiKey });
};

/**
 * Get JKT48 member detail by name with priority token only
 * 
 * @param {string} name - Member name
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Member detail
 */
const getMemberDetailWithPriority = async (name, priorityToken) => {
  validateParam('Member name', name);
  validateParam('priorityToken', priorityToken);
  return await makeRequest(ENDPOINTS.MEMBER_DETAIL(name), {
    priorityToken: priorityToken
  });
};

module.exports = {
  getMemberDetail,
  getMemberDetailLegacy,
  getMemberDetailWithPriority,
  // Default export for backward compatibility
  default: getMemberDetail
};
