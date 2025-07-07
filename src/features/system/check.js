/**
 * Apikey Validation Check
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * check apikey information
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Live data
 */
const check = async (apiKey) => {
  return await makeRequest(ENDPOINTS.CHECK, apiKey);
};

module.exports = check;