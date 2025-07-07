/**
 * JKT48 Admin API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest } = require('../../utils');

/**
 * Get all admin keys
 * 
 * @returns {Promise<Object>} - Keys data
 */
const getKeys = async () => {
  return await makeRequest(ENDPOINTS.ADMIN_KEYS());
};

/**
 * Get specific key details
 * 
 * @param {string} key - The key to retrieve
 * @returns {Promise<Object>} - Key details
 */
const getKeyDetail = async (key) => {
  return await makeRequest(ENDPOINTS.ADMIN_KEY_DETAIL(key));
};

/**
 * Update key status and type
 * 
 * @param {string} key - The key to update
 * @param {boolean} active - Whether the key is active
 * @param {string} type - The type of the key
 * @returns {Promise<Object>} - Update result
 */
const updateKey = async (key, active, type) => {
  return await makeRequest(ENDPOINTS.ADMIN_UPDATE_KEY(key, active, type));
};

/**
 * Delete a specific key
 * 
 * @param {string} key - The key to delete
 * @returns {Promise<Object>} - Delete result
 */
const deleteKey = async (key) => {
  return await makeRequest(ENDPOINTS.ADMIN_DELETE_KEY(key));
};

/**
 * Get admin statistics
 * 
 * @returns {Promise<Object>} - Statistics data
 */
const getStats = async () => {
  return await makeRequest(ENDPOINTS.ADMIN_STATS());
};

/**
 * Create a new key
 * 
 * @param {string} owner - The owner of the key
 * @param {string} email - The email associated with the key
 * @param {string} [type=''] - Optional type of the key
 * @param {string} [apikey=''] - Optional custom API key
 * @returns {Promise<Object>} - Create result
 */
const createKey = async (owner, email, type = '', apikey = '') => {
  return await makeRequest(ENDPOINTS.ADMIN_CREATE_KEY(owner, email, type, apikey));
};

/**
 * Add additional limit to an existing API key
 * 
 * @param {string} key - The API key to update
 * @param {number} additionalLimit - Additional limit to add to the existing limit
 * @returns {Promise<Object>} - Update result with previous limit, additional limit, and new limit
 */
const addLimit = async (key, additionalLimit) => {
  return await makeRequest(ENDPOINTS.ADMIN_ADD_LIMIT(key, additionalLimit));
};

/**
 * Add additional days to API key expiry date
 * 
 * @param {string} key - The API key to update
 * @param {number} additionalDays - Additional days to add to the expiry date
 * @returns {Promise<Object>} - Update result with previous expiry, additional days, and new expiry
 */
const addExpiry = async (key, additionalDays) => {
  return await makeRequest(ENDPOINTS.ADMIN_ADD_EXPIRY(key, additionalDays));
};

module.exports = {
  getKeys,
  getKeyDetail,
  updateKey,
  deleteKey,
  getStats,
  createKey,
  addLimit,
  addExpiry
};