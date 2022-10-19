import PropTypes from 'prop-types';
import { ProfileItem } from '../ProfileItem/ProfileItem';

export const ProfileList = ({ userDataStats: { followers, views, likes } }) => {
  return (
    <ul>
      <ProfileItem itemName="Followers" itemValue={followers} />
      <ProfileItem itemName="Views" itemValue={views} />
      <ProfileItem itemName="Likes" itemValue={likes} />
    </ul>
  );
};

ProfileList.propTypes = {
  userDataStats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
