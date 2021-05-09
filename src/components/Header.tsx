import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Wrapper = styled.div`
  background: ${theme.palette.background.header};
  padding: ${theme.spacing(8)};
  margin-bottom: ${theme.spacing(8)};
`;

const Title = styled.h1`
  color: ${theme.palette.background.body};
  margin: 0;
`;

const Header = () => (
  <Wrapper>
    <div className="container">
      <Title>Tray Application</Title>
    </div>
  </Wrapper>
);

export default Header;
