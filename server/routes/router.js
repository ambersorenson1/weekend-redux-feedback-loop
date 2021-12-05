const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all orders that have been placed, populate with data from prime feedback
router.get('/', (req, res) => {
    // Find all orders and return them
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedback', error);
        res.sendStatus(500);  
    });
})

// POST a new order
router.post('/', (req, res) => {

  let feedback = req.body;
  console.log('Adding feedback', feeback);
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "type")
        VALUES ($1, $2, $3, $4);`
  pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
  .then(result => {
    res.sendStatus(201);
  }).catch(error => {
    console.log('Error adding feedback', error);
    res.sendStatus(500); 
  })
});
       
module.exports = router;