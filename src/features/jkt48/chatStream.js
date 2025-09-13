/**
 * JKT48 Chat Stream API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 chat stream with enhanced authentication support
 * 
 * @param {string} username - Username for chat stream
 * @param {string} slug - Slug for chat stream
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Chat stream data
 */
const getChatStream = async (username, slug, auth) => {
  validateParam('Username', username);
  validateParam('Slug', slug);
  
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.CHAT_STREAM(username, slug), { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.CHAT_STREAM(username, slug), auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.CHAT_STREAM(username, slug));
};

/**
 * Get JKT48 chat stream (legacy function for backward compatibility)
 * 
 * @param {string} username - Username for chat stream
 * @param {string} slug - Slug for chat stream
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Chat stream data
 * @deprecated Use getChatStream with options object instead
 */
const getChatStreamLegacy = async (username, slug, apiKey) => {
  validateParam('Username', username);
  validateParam('Slug', slug);
  return await makeRequest(ENDPOINTS.CHAT_STREAM(username, slug), { apiKey });
};

/**
 * Get JKT48 chat stream with priority token only
 * 
 * @param {string} username - Username for chat stream
 * @param {string} slug - Slug for chat stream
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Chat stream data
 */
const getChatStreamWithPriority = async (username, slug, priorityToken) => {
  validateParam('Username', username);
  validateParam('Slug', slug);
  return await makeRequest(ENDPOINTS.CHAT_STREAM(username, slug), {
    priorityToken: priorityToken
  });
};

module.exports = {
  getChatStream,
  getChatStreamLegacy,
  getChatStreamWithPriority,
  // Default export for backward compatibility
  default: getChatStream
};
