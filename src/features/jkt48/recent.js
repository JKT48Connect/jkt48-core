/**
 * JKT48 Recent API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 recent activities
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Recent activities data
 */
const getRecent = async (apiKey) => {
  return await makeRequest(ENDPOINTS.RECENT, apiKey);
};

module.exports = getRecent;