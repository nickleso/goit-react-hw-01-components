import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FriendsItem } from './FriendsItem/FriendsItem';

const StyledFriendsItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: 2px 4px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.space[3]}px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const FriendsList = ({ friends }) => {
  return (
    <>
      <h2 className="visually-hidden">Friends section</h2>
      <ul>
        {friends.map(friend => (
          <StyledFriendsItem key={friend.id}>
            <FriendsItem
              dataName={friend.name}
              dataImg={friend.avatar}
              dataIsActive={friend.isOnline}
            />
          </StyledFriendsItem>
        ))}
      </ul>
    </>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
