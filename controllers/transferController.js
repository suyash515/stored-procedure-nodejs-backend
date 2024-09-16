const express = require('express');
const sql = require('mssql');

const router = express.Router();

router.post('/transfer', async (req, res) => {
    const { sourceAccountId, targetAccountId, amount } = req.body;
    try {
        const pool = await sql.connect('your-database-connection-string');
        const result = await pool.request()
            .input('SourceAccountID', sql.Int, sourceAccountId)
            .input('TargetAccountID', sql.Int, targetAccountId)
            .input('Amount', sql.Decimal(18, 2), amount)
            .execute('TransferFunds');
        res.status(200).json({ message: 'Transfer successful', result });
    } catch (error) {
        res.status(500).json({ message: 'Error during transfer', error });
    }
});

module.exports = router;