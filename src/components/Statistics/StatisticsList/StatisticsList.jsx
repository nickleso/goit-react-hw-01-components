import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../Utils/RandomColor';
import { StatisticsData } from '../StatisticsData/StatisticsData';

const StyledStatisticsList = styled.ul`
  width: 350px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, auto));
  border: 1px solid lightgray;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06);
`;

// const StyledStatisticsItem = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: ${getRandomHexColor()};
//   padding: ${p => p.theme.space[4]}px;
// `;

export const StatisticsList = ({ stats }) => {
  return (
    <StyledStatisticsList>
      {stats.map(stata => (
        <li
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: getRandomHexColor(),
            paddingTop: 16,
            paddingBottom: 16,
          }}
          key={stata.id}
        >
          <StatisticsData
            dataLabel={stata.label}
            dataPercentage={stata.percentage}
          />
        </li>
      ))}
    </StyledStatisticsList>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
