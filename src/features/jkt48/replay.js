/**
 * JKT48 Replay Theater/Live API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 YouTube content
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - YouTube data
 */
const getReplay = async (apiKey) => {
  return await makeRequest(ENDPOINTS.REPLAY, apiKey);
};

module.exports = getReplay;