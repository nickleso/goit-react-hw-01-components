import styled from 'styled-components';

const StyledTransactionHeading = styled.thead`
  background: lightgray;
`;

export const TransactionHeading = () => {
  return (
    <StyledTransactionHeading>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </StyledTransactionHeading>
  );
};
