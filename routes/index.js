const express = require('express');
const { getHttpResponseContent } = require('../utils/response');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(getHttpResponseContent({ data: 'Express' }));
});

module.exports = router;
