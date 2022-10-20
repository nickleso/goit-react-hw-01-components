import user from '../DataJson/user.json';
import { Box } from '../Styles/Box';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileList } from './ProfileList/ProfileList';

export const Profile = () => {
  return (
    <Box
      border="1px solid"
      box-shadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16)"
      as="section"
    >
      <ProfileDescription userData={user} />
      <ProfileList userDataStats={user.stats} />
    </Box>
  );
};
