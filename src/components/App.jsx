import { Box } from './Styles/Box';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gridGap={50}
      as="main"
    >
      <Profile />
      <Statistics />
    </Box>
  );
};
