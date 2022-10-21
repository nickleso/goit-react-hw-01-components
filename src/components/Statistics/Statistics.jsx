import data from '../DataJson/data.json';
import { StatisticsTitle } from './StatisticsSection/StatisticsTitle';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = () => {
  return (
    <>
      <StatisticsTitle title="Upload stats" />
      <StatisticsList stats={data} />
    </>
  );
};
