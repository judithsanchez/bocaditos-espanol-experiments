var express = require('express');
var router = express.Router();
const db = require('../model/helper');

/* GET home page. */
router.get('/', async (_, res) => {
  const results = await db('SELECT * FROM adjectives;');
  res.send(results.data);
});

module.exports = router;
