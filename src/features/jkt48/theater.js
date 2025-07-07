/**
 * JKT48 Theater API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 theater information
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Theater data
 */
const getTheater = async (apiKey) => {
  return await makeRequest(ENDPOINTS.THEATER, apiKey);
};

module.exports = getTheater;