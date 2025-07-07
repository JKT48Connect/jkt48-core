/**
 * JKT48 Events API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 events information
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Events data
 */
const getEvents = async (apiKey) => {
  return await makeRequest(ENDPOINTS.EVENTS, apiKey);
};

module.exports = getEvents;