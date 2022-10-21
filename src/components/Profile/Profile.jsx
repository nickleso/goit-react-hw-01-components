import user from '../DataJson/user.json';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileList } from './ProfileList/ProfileList';

export const Profile = () => {
  return (
    <>
      <h2 className="visually-hidden">Profile section</h2>
      <div
        style={{
          border: '1px solid lightgray',
          boxShadow:
            '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
        }}
      >
        <ProfileDescription userData={user} />
        <ProfileList userDataStats={user.stats} />
      </div>
    </>
  );
};
