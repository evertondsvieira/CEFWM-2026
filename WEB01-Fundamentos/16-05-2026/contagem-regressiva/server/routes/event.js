var express = require('express');
var router = express.Router();

/* GET Event listing. */
router.get('/', function(req, res, next) {
  res.json({
    targetDate: "2026-12-25T07:59:00-03:00", // natal
    currentDate: new Date().toISOString()
  })
});

module.exports = router;
