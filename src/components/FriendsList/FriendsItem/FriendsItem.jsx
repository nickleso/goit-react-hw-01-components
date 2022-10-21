import styled from 'styled-components';
import PropTypes from 'prop-types';
import { userIsActive } from 'components/Utils/userIsActive';

const StyledFriendsActivity = styled.span`
  display: block;
  border-radius: ${p => p.theme.radii.round};
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
`;
export const FriendsItem = ({ dataName, dataImg, dataIsActive }) => {
  return (
    <>
      <StyledFriendsActivity
        style={{
          backgroundColor: userIsActive(dataIsActive, 'green', 'red'),
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
