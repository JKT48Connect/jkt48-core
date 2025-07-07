/**
 * JKT48 Live IDN API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 live IDN information
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Live IDN data
 */
const getLiveIdn = async (apiKey) => {
  return await makeRequest(ENDPOINTS.LIVE_IDN, apiKey);
};

module.exports = getLiveIdn;