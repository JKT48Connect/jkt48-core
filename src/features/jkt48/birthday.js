/**
 * JKT48 Birthday API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 members' birthday information
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Birthday data
 */
const getBirthday = async (apiKey) => {
  return await makeRequest(ENDPOINTS.BIRTHDAY, apiKey);
};

module.exports = getBirthday;