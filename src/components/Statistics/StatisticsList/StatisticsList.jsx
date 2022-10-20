import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../Utils/RandomColor';
import { StatisticsData } from '../StatisticsData/StatisticsData';

const StyledStatisticsList = styled.ul`
  display: flex;
`;

const StyledStatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${getRandomHexColor()};
  padding: ${p => p.theme.space[4]}px;
`;

export const StatisticsList = ({ stats }) => {
  return (
    <StyledStatisticsList>
      {stats.map(stata => (
        <StyledStatisticsItem key={stata.id}>
          <StatisticsData
            dataLabel={stata.label}
            dataPercentage={stata.percentage}
          />
        </StyledStatisticsItem>
      ))}
    </StyledStatisticsList>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
