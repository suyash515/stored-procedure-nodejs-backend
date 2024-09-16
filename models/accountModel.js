const sql = require('mssql');

class Account {
    static async getBalance(accountId) {
        const pool = await sql.connect('your-database-connection-string');
        const result = await pool.request()
            .input('AccountID', sql.Int, accountId)
            .query('SELECT Balance FROM Accounts WHERE AccountID = @AccountID');
        return result.recordset[0].Balance;
    }

    static async updateBalance(accountId, amount) {
        const pool = await sql.connect('your-database-connection-string');
        await pool.request()
            .input('AccountID', sql.Int, accountId)
            .input('Amount', sql.Decimal(18, 2), amount)
            .query('UPDATE Accounts SET Balance = Balance + @Amount WHERE AccountID = @AccountID');
    }
}

module.exports = Account;