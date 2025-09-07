/**
 * JKT48 Video call today API 
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 Video Call Today data with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Video call today data
 */
const getVideoCallToday = async (auth) => {
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
  if (options.apiKey) {
    // If we have an API key, use it in the endpoint (assuming ENDPOINTS.VIDEO_CALL_TODAY expects apiKey)
    return await makeRequest(ENDPOINTS.VIDEO_CALL_TODAY(options.apiKey), {
      priorityToken: options.priorityToken
    });
  } else {
    // If no API key but have priority token, use base endpoint
    return await makeRequest(ENDPOINTS.VIDEO_CALL_TODAY(), options);
  }
};

/**
 * Get JKT48 Video Call Today data (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Video call today data
 * @deprecated Use getVideoCallToday with options object instead
 */
const getVideoCallTodayLegacy = async (apiKey) => {
  validateParam('apiKey', apiKey);
  return await makeRequest(ENDPOINTS.VIDEO_CALL_TODAY(apiKey));
};

/**
 * Get JKT48 Video Call Today data with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Video call today data
 */
const getVideoCallTodayWithPriority = async (priorityToken) => {
  validateParam('priorityToken', priorityToken);
  return await makeRequest(ENDPOINTS.VIDEO_CALL_TODAY(), {
    priorityToken: priorityToken
  });
};

module.exports = {
  getVideoCallToday,
  getVideoCallTodayLegacy,
  getVideoCallTodayWithPriority,
  // Default export for backward compatibility
  default: getVideoCallToday
};
