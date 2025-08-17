/**
 * JKT48 Video call today api 
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
const getVideoCallToday = async (apiKey) => {
  return await makeRequest(ENDPOINTS.VIDEO_CALL_TODAY(apiKey));
};
module.exports = getVideoCallToday;
