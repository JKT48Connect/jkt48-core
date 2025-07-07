/**
 * JKT48 Members API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get all JKT48 members
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Members data
 */
const getMembers = async (apiKey) => {
  return await makeRequest(ENDPOINTS.MEMBERS, apiKey);
};

module.exports = getMembers;