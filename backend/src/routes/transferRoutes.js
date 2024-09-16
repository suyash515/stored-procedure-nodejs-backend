const express = require('express');
const router = express.Router();
const { transferFunds } = require('../services/transferService');

router.post('/', async (req, res) => {
    const { sourceAccountId, targetAccountId, amount } = req.body;

    try {
        await transferFunds(sourceAccountId, targetAccountId, amount);
        res.status(200).json({ message: 'Transfer successful.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;