const express = require('express');
const { getHttpResponseContent } = require('../utils/response');
const { errorMessage } = require('../utils/enum');
const router = express.Router();

['get', 'post', , 'put', 'patch', 'delete'].forEach((method) => {
  router[method]('/', (req, res) => {
    res
      .status(404)
      .json(
        getHttpResponseContent({ success: false, data: errorMessage.router })
      );
  });
});

module.exports = router;
