import friends from './DataJson/friends.json';
import { Box } from './Styles/Box';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="flexStart"
      gridGap={30}
      py={20}
      as="main"
    >
      <h1 className="visually-hidden">My react components</h1>
      <Box as="section">
        <Profile />
      </Box>
      <Box as="section">
        <Statistics />
      </Box>
      <Box as="section">
        <FriendsList friends={friends} />
      </Box>
      <Box as="section">
        <TransactionHistory />
      </Box>
    </Box>
  );
};
