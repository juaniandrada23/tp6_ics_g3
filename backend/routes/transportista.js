const express = require('express');
const router = express.Router();
const { getTransportistas } = require('../controllers/transportistaController');

router.get('/:dador_id', getTransportistas);

module.exports = router;
