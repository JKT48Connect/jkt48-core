/**
 * JKT48 Recent Detail API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, validateParam } = require('../../utils');

/**
 * Get JKT48 recent activity detail by live ID
 * 
 * @param {string} liveId - Live ID
 * @param {string} apiKey - User's API key
 * @returns {Promise<Object>} - Recent activity detail
 */
const getRecentDetail = async (liveId, apiKey) => {
  validateParam('Live ID', liveId);
  return await makeRequest(ENDPOINTS.RECENT_DETAIL(liveId), apiKey);
};

module.exports = getRecentDetail;