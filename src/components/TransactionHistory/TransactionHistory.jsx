import transactions from '../DataJson/transactions.json';
import { TransactionHeading } from './TransactionHeading/TransactionHeading';
import { TransactionOperations } from './TransactionOperations/TransactionOperations';

export const TransactionHistory = () => {
  return (
    <>
      <h2 className="visually-hidden">Transactions section</h2>
      <table>
        <TransactionHeading />
        <TransactionOperations operations={transactions} />
      </table>
    </>
  );
};
