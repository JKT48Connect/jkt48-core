/**
 * JKT48 Video call api 
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
const getVideoCall = async (sesi = '', date = '', member = '', apiKey) => {
  return await makeRequest(ENDPOINTS.VIDEO_CALL(sesi, date, member, apiKey));
};
module.exports = getVideoCall;
