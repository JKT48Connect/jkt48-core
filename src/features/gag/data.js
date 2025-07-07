/**
 * Grow A Garden API Client
 *
 * This module provides functions to fetch various data related to the Grow A Garden game.
 */

const { ENDPOINTS } = require('../../constants'); // Sesuaikan path ini jika perlu
const { makeRequest } = require('../../utils');   // Sesuaikan path ini jika perlu

/**
 * Get Grow A Garden stock information.
 *
 * @param {string} apiKey - User's API key.
 * @returns {Promise<Object>} - Grow A Garden stock data.
 */
const getStock = async (apiKey) => {
  return await makeRequest(ENDPOINTS.STOCK, apiKey);
};

/**
 * Get Grow A Garden weather information.
 *
 * @param {string} apiKey - User's API key.
 * @returns {Promise<Object>} - Grow A Garden weather data.
 */
const getWeather = async (apiKey) => {
  return await makeRequest(ENDPOINTS.WEATHER, apiKey);
};

/**
 * Get Grow A Garden restock timers information.
 *
 * @param {string} apiKey - User's API key.
 * @returns {Promise<Object>} - Grow A Garden restock timers data.
 */
const getRestockTimers = async (apiKey) => {
  return await makeRequest(ENDPOINTS.RESTOCK, apiKey);
};

/**
 * Get all available Grow A Garden information (stock, weather, restock timers, etc.).
 * This endpoint might combine data from other specific endpoints.
 *
 * @param {string} apiKey - User's API key.
 * @returns {Promise<Object>} - All Grow A Garden data combined.
 */
const getAllData = async (apiKey) => {
  return await makeRequest(ENDPOINTS.ALL, apiKey);
};

module.exports = {
  getStock,
  getWeather,
  getRestockTimers,
  getAllData,
};
