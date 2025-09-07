/**
 * JKT48 Video call API 
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 Video Call data with enhanced authentication support
 * 
 * @param {string} [sesi=''] - Session parameter
 * @param {string} [date=''] - Date parameter  
 * @param {string} [member=''] - Member parameter
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Video call data
 */
const getVideoCall = async (sesi = '', date = '', member = '', auth) => {
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
    // If we have an API key, use it in the endpoint
    return await makeRequest(ENDPOINTS.VIDEO_CALL(sesi, date, member, options.apiKey), {
      priorityToken: options.priorityToken
    });
  } else {
    // If no API key but have priority token, use base endpoint without apiKey
    return await makeRequest(ENDPOINTS.VIDEO_CALL(sesi, date, member), options);
  }
};

/**
 * Get JKT48 Video Call data (legacy function for backward compatibility)
 * 
 * @param {string} [sesi=''] - Session parameter
 * @param {string} [date=''] - Date parameter
 * @param {string} [member=''] - Member parameter
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Video call data
 * @deprecated Use getVideoCall with options object instead
 */
const getVideoCallLegacy = async (sesi = '', date = '', member = '', apiKey) => {
  return await makeRequest(ENDPOINTS.VIDEO_CALL(sesi, date, member, apiKey));
};

/**
 * Get JKT48 Video Call data with priority token only
 * 
 * @param {string} [sesi=''] - Session parameter
 * @param {string} [date=''] - Date parameter
 * @param {string} [member=''] - Member parameter
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Video call data
 */
const getVideoCallWithPriority = async (sesi = '', date = '', member = '', priorityToken) => {
  validateParam('priorityToken', priorityToken);
  return await makeRequest(ENDPOINTS.VIDEO_CALL(sesi, date, member), {
    priorityToken: priorityToken
  });
};

module.exports = {
  getVideoCall,
  getVideoCallLegacy,
  getVideoCallWithPriority,
  // Default export for backward compatibility
  default: getVideoCall
};
