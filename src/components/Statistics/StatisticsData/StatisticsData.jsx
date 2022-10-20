import PropTypes from 'prop-types';

export const StatisticsData = ({ dataLabel, dataPercentage }) => {
  return (
    <>
      <span>{dataLabel}</span>
      <span>{dataPercentage}%</span>
    </>
  );
};

StatisticsData.propTypes = {
  dataLabel: PropTypes.string.isRequired,
  dataPercentage: PropTypes.number.isRequired,
};
