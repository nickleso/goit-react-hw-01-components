import PropTypes from 'prop-types';

export const ProfileDescription = ({
  userData: { avatar, username, tag, location },
}) => {
  return (
    <div key={tag}>
      <img src={avatar} alt={username} width="200" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
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
