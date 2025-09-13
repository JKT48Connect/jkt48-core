/**
 * JKT48 Events API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 events information with enhanced authentication support
 * 
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Events data
 */
const getEvents = async (auth) => {
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.EVENTS, { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.EVENTS, auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.EVENTS);
};

/**
 * Get JKT48 events information (legacy function for backward compatibility)
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Events data
 * @deprecated Use getEvents with options object instead
 */
const getEventsLegacy = async (apiKey) => {
  return await makeRequest(ENDPOINTS.EVENTS, { apiKey });
};

/**
 * Get JKT48 events information with priority token only
 * 
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Events data
 */
const getEventsWithPriority = async (priorityToken) => {
  return await makeRequest(ENDPOINTS.EVENTS, {
    priorityToken: priorityToken
  });
};

module.exports = {
  getEvents,
  getEventsLegacy,
  getEventsWithPriority,
  // Default export for backward compatibility
  default: getEvents
};
