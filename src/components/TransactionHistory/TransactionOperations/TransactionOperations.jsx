import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TransactionsData } from '../TransactionsData/TransactionsData';

const StyledTransactionRow = styled.tr`
  &:nth-child(odd) {
    background: lightblue;
  }
`;

export const TransactionOperations = ({ operations }) => {
  return (
    <tbody>
      {operations.map(operation => (
        <StyledTransactionRow key={operation.id}>
          <TransactionsData
            dataType={operation.type}
            dataAmount={operation.amount}
            dataCurrency={operation.currency}
          />
        </StyledTransactionRow>
      ))}
    </tbody>
  );
};

TransactionOperations.propTypes = {
  operations: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
