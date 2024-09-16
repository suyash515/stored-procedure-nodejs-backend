const sql = require('mssql');

class Transaction {
    static async recordTransaction(accountId, amount, transactionType, description) {
        const pool = await sql.connect('your-database-connection-string');
        await pool.request()
            .input('AccountID', sql.Int, accountId)
            .input('TransactionDate', sql.DateTime, new Date())
            .input('Amount', sql.Decimal(18, 2), amount)
            .input('TransactionType', sql.VarChar(10), transactionType)
            .input('Description', sql.VarChar(255), description)
            .query('INSERT INTO Transactions (AccountID, TransactionDate, Amount, TransactionType, Description) VALUES (@AccountID, @TransactionDate, @Amount, @TransactionType, @Description)');
    }
}

module.exports = Transaction;