/**
 * JKT48 Changelog API
 */
const { ENDPOINTS } = require('../../constants');
const { makeRequest, makeFormDataRequest } = require('../../utils');

/**
 * Get all changelogs
 * 
 * @returns {Promise<Object>} - Changelogs data with status, count, and data array
 */
const getChangelogs = async () => {
  return await makeRequest(ENDPOINTS.CHANGELOGS);
};

/**
 * Get specific changelog details
 * 
 * @param {number|string} id - The changelog ID to retrieve
 * @returns {Promise<Object>} - Changelog details
 */
const getChangelogDetail = async (id) => {
  return await makeRequest(ENDPOINTS.CHANGELOG_DETAIL(id));
};

/**
 * Create a new changelog
 * 
 * @param {Object} changelogData - The changelog data
 * @param {string} changelogData.version - Version number
 * @param {string} changelogData.title - Changelog title
 * @param {string} changelogData.description - Changelog description
 * @param {string} changelogData.type - Type of changelog
 * @param {string} changelogData.author - Author name
 * @param {string} [changelogData.badges] - Optional badges
 * @param {boolean} [changelogData.published] - Published status
 * @param {string} [changelogData.changes] - Changes details
 * @param {File} [imageFile] - Optional image file
 * @returns {Promise<Object>} - Create result
 */
const createChangelog = async (changelogData, imageFile = null) => {
  const formData = new FormData();
  
  // Add required fields
  formData.append('version', changelogData.version);
  formData.append('title', changelogData.title);
  formData.append('description', changelogData.description);
  formData.append('type', changelogData.type);
  formData.append('author', changelogData.author);
  
  // Add optional fields
  if (changelogData.badges) formData.append('badges', changelogData.badges);
  if (changelogData.published !== undefined) formData.append('published', changelogData.published);
  if (changelogData.changes) formData.append('changes', changelogData.changes);
  
  // Add image file if provided
  if (imageFile) formData.append('image', imageFile);
  
  return await makeFormDataRequest(ENDPOINTS.CREATE_CHANGELOG, 'POST', formData);
};

/**
 * Update a changelog
 * 
 * @param {number|string} id - The changelog ID to update
 * @param {Object} updateData - The data to update
 * @param {string} [updateData.version] - Version number
 * @param {string} [updateData.title] - Changelog title
 * @param {string} [updateData.description] - Changelog description
 * @param {string} [updateData.type] - Type of changelog
 * @param {string} [updateData.author] - Author name
 * @param {string} [updateData.badges] - Badges
 * @param {boolean} [updateData.published] - Published status
 * @param {string} [updateData.changes] - Changes details
 * @param {File} [imageFile] - Optional new image file
 * @returns {Promise<Object>} - Update result
 */
const updateChangelog = async (id, updateData, imageFile = null) => {
  const formData = new FormData();
  
  // Add fields that are being updated
  Object.keys(updateData).forEach(key => {
    if (updateData[key] !== undefined && updateData[key] !== null) {
      formData.append(key, updateData[key]);
    }
  });
  
  // Add image file if provided
  if (imageFile) formData.append('image', imageFile);
  
  return await makeFormDataRequest(ENDPOINTS.UPDATE_CHANGELOG(id), 'PUT', formData);
};

/**
 * Delete a changelog
 * 
 * @param {number|string} id - The changelog ID to delete
 * @returns {Promise<Object>} - Delete result
 */
const deleteChangelog = async (id) => {
  return await makeRequest(ENDPOINTS.DELETE_CHANGELOG(id), 'DELETE');
};

module.exports = {
  getChangelogs,
  getChangelogDetail,
  createChangelog,
  updateChangelog,
  deleteChangelog
};