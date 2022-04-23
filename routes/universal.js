const express = require('express');
const { getHttpResponseContent } = require('../utils/response');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res
    .status(404)
    .json(getHttpResponseContent({ success: false, data: '無對應路由' }));
});

module.exports = router;
