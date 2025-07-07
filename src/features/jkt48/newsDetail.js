/**
 * JKT48 News Detail API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 news detail by ID
 * 
 * @param {string} id - News ID
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - News detail
 */
const getNewsDetail = async (id, apiKey) => {
  validateParam('News ID', id);
  return await makeRequest(ENDPOINTS.NEWS_DETAIL(id), apiKey);
};

module.exports = getNewsDetail;