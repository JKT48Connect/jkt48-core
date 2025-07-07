/**
 * JKT48 YouTube API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 YouTube content
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - YouTube data
 */
const getYoutube = async (apiKey) => {
  return await makeRequest(ENDPOINTS.YOUTUBE, apiKey);
};

module.exports = getYoutube;