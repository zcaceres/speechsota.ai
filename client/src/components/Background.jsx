import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.nav`
  height: 100vh;
  z-index: 0;

`

export default ({ children }) => (
  <StyledBackground>
    {children}
  </StyledBackground>
)
