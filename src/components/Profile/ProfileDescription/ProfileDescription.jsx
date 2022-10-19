import { Box } from '../../Styles/Box';
import PropTypes from 'prop-types';

export const ProfileDescription = ({
  userData: { avatar, username, tag, location },
}) => {
  return (
    <Box
      width="200px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={20}
      gridGap={10}
    >
      <Box width="100%" borderRadius="50%" overflow="hidden">
        <img src={avatar} alt={username} width="200" />
      </Box>

      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </Box>
  );
};

ProfileDescription.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
