const { getHttpResponseContent } = require('../utils/response');
const { errorMessage } = require('../utils/enum');

/**
 * 找不到路由
 */
const notFound = (req, res, next) => {
  res
    .status(404)
    .json(
      getHttpResponseContent({ success: false, data: errorMessage.router })
    );
};

const internalServerError = (error, req, res, next) => {
  res
    .status(500)
    .json(
      getHttpResponseContent({ success: false, data: errorMessage.server })
    );
};

module.exports = {
  notFound,
  internalServerError,
};
