// import styled from 'styled-components';
import { Box } from './Styles/Box';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <Box
      // mr="auto"
      // ml="auto"

      display="flex"
      justifyContent="center"
      alignItems="center"
      as="main"
    >
      <Profile />
    </Box>
  );
};
