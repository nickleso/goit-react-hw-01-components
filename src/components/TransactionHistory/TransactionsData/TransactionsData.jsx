import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDataRow = styled.td`
  min-width: ${p => p.theme.space[8]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
`;

export const TransactionsData = ({ dataType, dataAmount, dataCurrency }) => {
  return (
    <>
      <StyledDataRow>{dataType}</StyledDataRow>
      <StyledDataRow>{dataAmount}</StyledDataRow>
      <StyledDataRow>{dataCurrency}</StyledDataRow>
    </>
  );
};

TransactionsData.propTypes = {
  dataType: PropTypes.string.isRequired,
  dataAmount: PropTypes.string.isRequired,
  dataCurrency: PropTypes.string.isRequired,
};
