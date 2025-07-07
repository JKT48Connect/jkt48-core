/**
 * JKT48 Theater Detail API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 theater detail by ID
 * 
 * @param {string} id - Theater ID
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Theater detail
 */
const getTheaterDetail = async (id, apiKey) => {
  validateParam('Theater ID', id);
  return await makeRequest(ENDPOINTS.THEATER_DETAIL(id), apiKey);
};

module.exports = getTheaterDetail;