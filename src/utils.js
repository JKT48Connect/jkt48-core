/**
 * Utility functions for JKT48 API client
 */
const axios = require('axios');
const { BASE_URL } = require('./constants');

/**
 * Make HTTP request to JKT48 API
 * 
 * @param {string} endpoint - API endpoint
 * @param {string} [apiKey] - Optional user's API key
 * @returns {Promise<Object>} - API response
 */
const makeRequest = async (endpoint, apiKey) => {
  try {
    const url = apiKey
      ? `${BASE_URL}${endpoint}?apikey=${apiKey}`
      : `${BASE_URL}${endpoint}`;

    const response = await axios.get(url);
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
  validateParam
};