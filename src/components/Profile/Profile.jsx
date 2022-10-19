import { Box } from '../Styles/Box';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileList } from './ProfileList/ProfileList';
import user from '../DataJson/user.json';

export const Profile = () => {
  return (
    <Box border="1px solid" as="section">
      <ProfileDescription userData={user} />
      <ProfileList userDataStats={user.stats} />
    </Box>
  );
};
