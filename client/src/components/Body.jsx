import React from 'react';
import styled from 'styled-components';
import Table from './Table'

const StyledBody = styled.div`
  max-width: 85vw;
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  float: right;
  overflow-y: auto;
`

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: normal;
  font-family: "Major Mono Display";
  text-align: center;
  align-self: center;
  margin: 5rem 2rem 0 2rem;
`

const SubHeading = styled.h2`
  font-weight: 1.5rem;
  font-family: "Major Mono Display";
  text-align: center;
  align-self: center;
  margin: 2rem 0;
`

const ResultsContainer = styled.div`
  margin: 2rem;
`

export default ({ selected }) => (
  <StyledBody>
    <Heading>speech recognition (s)tate (o)f (t)he (a)rt</Heading>
    <SubHeading>Tracking high-performing models in <br />speech recognition.</SubHeading>
    <ResultsContainer>
      <Table source={selected} />
    </ResultsContainer>
  </StyledBody>
)
