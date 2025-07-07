/**
 * JKT48 Chat Stream SR API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 chat stream for Showroom
 * 
 * @param {string} roomId - Room ID for Showroom chat stream
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Chat stream data for Showroom
 */
const getChatStreamSR = async (roomId, apiKey) => {
  validateParam('Room ID', roomId);
  return await makeRequest(ENDPOINTS.CHAT_STREAM_SR(roomId), apiKey);
};

module.exports = getChatStreamSR;