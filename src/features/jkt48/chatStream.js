/**
 * JKT48 Chat Stream API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 chat stream
 * 
 * @param {string} username - Username for chat stream
 * @param {string} slug - Slug for chat stream
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Chat stream data
 */
const getChatStream = async (username, slug, apiKey) => {
  validateParam('Username', username);
  validateParam('Slug', slug);
  return await makeRequest(ENDPOINTS.CHAT_STREAM(username, slug), apiKey);
};

module.exports = getChatStream;