/**
 * JKT48 News API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get JKT48 news information
 * 
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - News data
 */
const getNews = async (apiKey) => {
  return await makeRequest(ENDPOINTS.NEWS, apiKey);
};

module.exports = getNews;