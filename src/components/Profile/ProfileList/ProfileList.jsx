import styled from 'styled-components';
// import { Box } from '../../Styles/Box';
import PropTypes from 'prop-types';
import { ProfileItem } from '../ProfileItem/ProfileItem';

const StyledProfileList = styled.ul`
  display: flex;
  justify-content: space-around;
  background: lightgray;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const ProfileList = ({ userDataStats: { followers, views, likes } }) => {
  return (
    <StyledProfileList>
      <ProfileItem itemName="Followers" itemValue={followers} />
      <ProfileItem itemName="Views" itemValue={views} />
      <ProfileItem itemName="Likes" itemValue={likes} />
    </StyledProfileList>
  );
};

ProfileList.propTypes = {
  userDataStats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
