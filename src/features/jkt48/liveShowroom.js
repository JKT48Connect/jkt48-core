/**
 * JKT48 Live Showroom API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 live Showroom information
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Live Showroom data
 */
const getLiveShowroom = async (apiKey) => {
  return await makeRequest(ENDPOINTS.LIVE_SHOWROOM, apiKey);
};

module.exports = getLiveShowroom;