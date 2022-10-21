import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpanPercentage = styled.span`
  color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StatisticsData = ({ dataLabel, dataPercentage }) => {
  return (
    <>
      <span>{dataLabel}</span>
      <StyledSpanPercentage>{dataPercentage}%</StyledSpanPercentage>
    </>
  );
};

StatisticsData.propTypes = {
  dataLabel: PropTypes.string.isRequired,
  dataPercentage: PropTypes.number.isRequired,
};
