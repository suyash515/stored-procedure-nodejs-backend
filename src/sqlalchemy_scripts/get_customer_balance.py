from sqlalchemy import create_engine, MetaData, Table, select

# Database configuration and connection
DATABASE_URL = "postgresql://user:password@localhost/yourdatabase"
engine = create_engine(DATABASE_URL)
metadata = MetaData(bind=engine)

# Reflect the Accounts table
accounts = Table('Accounts', metadata, autoload_with=engine)

# Function to retrieve customer balance
def get_customer_balance(account_id: int):
    with engine.connect() as connection:
        query = select([accounts.c.AccountNumber, accounts.c.AccountType, accounts.c.Balance]).where(accounts.c.AccountID == account_id)
        result = connection.execute(query).fetchone()
        if result:
            return {
                'AccountNumber': result.AccountNumber,
                'AccountType': result.AccountType,
                'Balance': result.Balance
            }
        return None