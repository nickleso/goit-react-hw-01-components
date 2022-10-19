import styled from 'styled-components';

const StyledProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
`;

export const ProfileItem = ({ itemName, itemValue }) => {
  return (
    <StyledProfileItem>
      <span>{itemName}</span>
      <span>{itemValue}</span>
    </StyledProfileItem>
  );
};
