/**
 * Utility functions for JKT48 API client
 */
const axios = require('axios');
const { BASE_URL } = require('./constants');

/**
 * Make HTTP request to JKT48 API with support for API key and priority token
 * 
 * @param {string} endpoint - API endpoint
 * @param {Object} [options] - Request options
 * @param {string} [options.apiKey] - Optional user's API key
 * @param {string} [options.priorityToken] - Optional priority token
 * @returns {Promise<Object>} - API response
 */
const makeRequest = async (endpoint, options = {}) => {
  try {
    const { apiKey, priorityToken } = options;
    
    // Build URL with API key if provided
    const url = apiKey
      ? `${BASE_URL}${endpoint}?apikey=${apiKey}`
      : `${BASE_URL}${endpoint}`;

    // Build headers with priority token if provided
    const headers = {};
    if (priorityToken) {
      headers['x-priority-token'] = priorityToken;
    }

    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`API Error: ${error.response.status} - ${error.response.data.message || JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      throw new Error('Network Error: No response received from server');
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
};

/**
 * Make HTTP request to JKT48 API (legacy version for backward compatibility)
 * 
 * @param {string} endpoint - API endpoint
 * @param {string} [apiKey] - Optional user's API key
 * @returns {Promise<Object>} - API response
 * @deprecated Use makeRequest with options object instead
 */
const makeRequestLegacy = async (endpoint, apiKey) => {
  return makeRequest(endpoint, { apiKey });
};

/**
 * Validate required parameters
 * 
 * @param {string} paramName - Parameter name
 * @param {any} paramValue - Parameter value
 */
const validateParam = (paramName, paramValue) => {
  if (!paramValue) {
    throw new Error(`${paramName} is required`);
  }
};

module.exports = {
  makeRequest,
  makeRequestLegacy, // For backward compatibility
  validateParam
};
