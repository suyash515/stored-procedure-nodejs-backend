async function transferFunds(sourceAccountId, targetAccountId, amount) {
    // Mock database
    const accounts = [
        { accountId: 1, balance: 1000 },
        { accountId: 2, balance: 1500 }
    ];

    // Find source and target accounts
    const sourceAccount = accounts.find(acc => acc.accountId === sourceAccountId);
    const targetAccount = accounts.find(acc => acc.accountId === targetAccountId);

    // Check if source account balance is sufficient
    if (sourceAccount.balance < amount) {
        throw new Error('Insufficient funds in the source account.');
    }

    // Perform the transfer
    sourceAccount.balance -= amount;
    targetAccount.balance += amount;

    // Record transactions
    console.log(`$${amount} transferred from account ${sourceAccountId} to account ${targetAccountId}.`);
}

module.exports = {
    transferFunds
};