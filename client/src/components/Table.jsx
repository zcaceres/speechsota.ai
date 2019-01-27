import React from 'react'
import styled from 'styled-components'
import RenderMarkdown from './RenderMarkdown'

const StyledTable = styled.table`
  table {
    min-width: 100%;
    border-collapse:separate;
    border-spacing: 0 0.5rem;
    table-layout: fixed;
    text-align: center;
    line-height: 2rem;
  }

  h2 {
    font-family: "Open Sans";
  }

  td {
    padding: 0 1rem;
  }

  thead > tr {
    box-shadow: none;
    :hover {
      box-shadow: none;
    }
  }

  tr {
    font-size: 0.875rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.24,.8,.25,1);

    :hover {
      box-shadow: 0 4px 28px rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.22);
    }
  }

  tr > td:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  tr > td:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  th {
    padding: 0 1rem;
  }
`

const Table = ({ source }) => (
  <StyledTable>
    <RenderMarkdown source={source} />
  </StyledTable>
)

export default Table
