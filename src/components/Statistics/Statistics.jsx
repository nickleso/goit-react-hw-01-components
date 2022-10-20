import data from '../DataJson/data.json';
import { Box } from '../Styles/Box';
import { StatisticsTitle } from './StatisticsSection/StatisticsTitle';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = () => {
  return (
    <Box as="section">
      <StatisticsTitle title="Upload stats" />
      <StatisticsList stats={data} />
    </Box>
  );
};
