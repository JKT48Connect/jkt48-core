/**
 * JKT48 Live YouTube API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 live YouTube information
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Live YouTube data
 */
const getLiveYoutube = async (apiKey) => {
  return await makeRequest(ENDPOINTS.LIVE_YOUTUBE, apiKey);
};

module.exports = getLiveYoutube;