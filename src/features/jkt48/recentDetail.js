/**
 * JKT48 Recent Detail API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 recent activity detail by live ID with enhanced authentication support
 * 
 * @param {string} liveId - Live ID
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Recent activity detail
 */
const getRecentDetail = async (liveId, auth) => {
  validateParam('Live ID', liveId);
  
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
  return await makeRequest(ENDPOINTS.RECENT_DETAIL(liveId), options);
};

/**
 * Get JKT48 recent activity detail by live ID (legacy function for backward compatibility)
 * 
 * @param {string} liveId - Live ID
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Recent activity detail
 * @deprecated Use getRecentDetail with options object instead
 */
const getRecentDetailLegacy = async (liveId, apiKey) => {
  validateParam('Live ID', liveId);
  return await makeRequest(ENDPOINTS.RECENT_DETAIL(liveId), { apiKey });
};

/**
 * Get JKT48 recent activity detail by live ID with priority token only
 * 
 * @param {string} liveId - Live ID
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Recent activity detail
 */
const getRecentDetailWithPriority = async (liveId, priorityToken) => {
  validateParam('Live ID', liveId);
  validateParam('priorityToken', priorityToken);
  return await makeRequest(ENDPOINTS.RECENT_DETAIL(liveId), {
    priorityToken: priorityToken
  });
};

module.exports = {
  getRecentDetail,
  getRecentDetailLegacy,
  getRecentDetailWithPriority,
  // Default export for backward compatibility
  default: getRecentDetail
};
