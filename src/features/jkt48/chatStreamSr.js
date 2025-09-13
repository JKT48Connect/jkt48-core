/**
 * JKT48 Chat Stream SR API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 chat stream for Showroom with enhanced authentication support
 * 
 * @param {string} roomId - Room ID for Showroom chat stream
 * @param {string|Object} [auth] - Authentication options
 *   - If string: API key (for backward compatibility)
 *   - If object: { apiKey?: string, priorityToken?: string }
 * @returns {Promise<Object>} - Chat stream data for Showroom
 */
const getChatStreamSR = async (roomId, auth) => {
  validateParam('Room ID', roomId);
  
  // Handle backward compatibility - if auth is a string, treat it as apiKey
  if (typeof auth === 'string') {
    return await makeRequest(ENDPOINTS.CHAT_STREAM_SR(roomId), { apiKey: auth });
  }
  
  // Handle new object-based authentication
  if (typeof auth === 'object' && auth !== null) {
    return await makeRequest(ENDPOINTS.CHAT_STREAM_SR(roomId), auth);
  }
  
  // No authentication provided
  return await makeRequest(ENDPOINTS.CHAT_STREAM_SR(roomId));
};

/**
 * Get JKT48 chat stream for Showroom (legacy function for backward compatibility)
 * 
 * @param {string} roomId - Room ID for Showroom chat stream
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Chat stream data for Showroom
 * @deprecated Use getChatStreamSR with options object instead
 */
const getChatStreamSRLegacy = async (roomId, apiKey) => {
  validateParam('Room ID', roomId);
  return await makeRequest(ENDPOINTS.CHAT_STREAM_SR(roomId), { apiKey });
};

/**
 * Get JKT48 chat stream for Showroom with priority token only
 * 
 * @param {string} roomId - Room ID for Showroom chat stream
 * @param {string} priorityToken - Priority token
 * @returns {Promise<Object>} - Chat stream data for Showroom
 */
const getChatStreamSRWithPriority = async (roomId, priorityToken) => {
  validateParam('Room ID', roomId);
  return await makeRequest(ENDPOINTS.CHAT_STREAM_SR(roomId), {
    priorityToken: priorityToken
  });
};

module.exports = {
  getChatStreamSR,
  getChatStreamSRLegacy,
  getChatStreamSRWithPriority,
  // Default export for backward compatibility
  default: getChatStreamSR
};
