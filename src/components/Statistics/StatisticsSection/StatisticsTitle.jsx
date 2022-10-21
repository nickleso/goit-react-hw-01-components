import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  text-align: center;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const StatisticsTitle = ({ title }) => {
  return <>{title && <StyledTitle>{title}</StyledTitle>}</>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};
