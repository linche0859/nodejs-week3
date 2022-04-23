/**
 * 取得 http 回傳的內容
 * @param {boolean} success 是否為成功類型
 * @param {string|array} data 回傳的內容
 * @returns {object} http 回傳的內容
 */
const getHttpResponseContent = ({ success = true, data } = {}) => {
  const result = { status: success ? 'success' : 'error' };
  if (data) result[success ? 'data' : 'message'] = data;
  return result;
};

module.exports = {
  getHttpResponseContent,
};
