var express = require('express');
var router = express.Router();
const db = require('../model/helper');

router.get('/', async (_, res) => {
  try {
    const results = await db('SELECT * FROM adjectives;');
    res.send(results.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
