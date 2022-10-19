import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileList } from './ProfileList/ProfileList';
import user from '../DataJson/user.json';

export const Profile = () => {
  return (
    <div>
      <ProfileDescription userData={user} />
      <ProfileList userDataStats={user.stats} />
    </div>
  );
};
