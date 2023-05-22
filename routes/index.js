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

router.put('/adjectives/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { spanish, english, img_url } = req.body;

    await db(
      // `UPDATE adjectives SET spanish='${spanish}', english='${english}', img_url='${img_url}' WHERE id=${id};`
      `UPDATE adjectives SET spanish=${spanish}, english=${english}, img_url=${img_url} WHERE id=${id};`
    );

    const updatedAdjectives = await db('SELECT * FROM adjectives;');
    res.status(200).send(updatedAdjectives);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
