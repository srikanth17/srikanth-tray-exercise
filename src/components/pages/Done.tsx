import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: green;
  text-align: center;
`;

const Done = () => {
  return (
    <Wrapper>
      <i className="large material-icons">check</i>
      <h5>
        Please verify your email address, you should have received an email from
        us already!
      </h5>
    </Wrapper>
  );
};

export default Done;
