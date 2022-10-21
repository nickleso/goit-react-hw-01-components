import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFriendsActivity = styled.span`
  display: block;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
export const FriendsItem = ({ dataName, dataImg, dataIsActive }) => {
  return (
    <>
      <StyledFriendsActivity
        style={{
          backgroundColor: userIsActive(dataIsActive),
        }}
      ></StyledFriendsActivity>
      <img src={dataImg} alt={dataName} width="68px" />
      <p>{dataName}</p>
    </>
  );
};

FriendsItem.propTypes = {
  dataName: PropTypes.string.isRequired,
  dataImg: PropTypes.string.isRequired,
  dataIsActive: PropTypes.bool.isRequired,
};

function userIsActive(dataIsActive) {
  if (dataIsActive) {
    return 'green';
  }
  return 'red';
}
