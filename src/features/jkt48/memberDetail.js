/**
 * JKT48 Member Detail API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 member detail by name
 * 
 * @param {string} name - Member name
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Member detail
 */
const getMemberDetail = async (name, apiKey) => {
  validateParam('Member name', name);
  return await makeRequest(ENDPOINTS.MEMBER_DETAIL(name), apiKey);
};

module.exports = getMemberDetail;