/**
 * JKT48 Live API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 live information
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Live data
 */
const getLive = async (apiKey) => {
  return await makeRequest(ENDPOINTS.LIVE, apiKey);
};

module.exports = getLive;