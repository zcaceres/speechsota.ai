import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Body from './components/Body';
import './App.css';
import 'normalize.css';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Major+Mono+Display|Montserrat:400,500,700');
  margin: 0;
  padding: 0;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Nav = styled.nav`
  background-color: var(--greyish);
  width: 15vw;
  float: left;
  padding-top: 5rem;
  height: 100vh;
  position: fixed;
  font-size: 0.875rem;
  display: flex;
  z-index: 1;
  flex-direction: column;
  color: white;
  box-shadow: var(--shadow) 1px 0px 16px;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
    padding: 1rem 0;
  }
`

const SOURCES = [
  { name: 'TIMIT', source: 'https://raw.githubusercontent.com/zcaceres/speechsota.ai/master/docs/TIMIT.md' },
  { name: 'LibriSpeech', source: 'https://raw.githubusercontent.com/zcaceres/speechsota.ai/master/docs/Librispeech.md' },
  { name: 'TED-LIUM', source: 'https://raw.githubusercontent.com/zcaceres/speechsota.ai/master/docs/TED-LIUM.md' },
  { name: 'WSJ', source: 'https://raw.githubusercontent.com/zcaceres/speechsota.ai/master/docs/WSJ.md' },
  { name: 'Rich Transcriptions', source: 'https://raw.githubusercontent.com/zcaceres/speechsota.ai/master/docs/Rich-Transcriptions.md' },
  { name: 'Fisher', source: 'https://raw.githubusercontent.com/zcaceres/speechsota.ai/master/docs/Fisher.md' },
  { name: 'CHiME', source: 'https://raw.githubusercontent.com/zcaceres/speechsota.ai/master/docs/CHiME.md' },
  { name: 'SwitchBoard / Hub5\'00', source: 'https://raw.githubusercontent.com/zcaceres/speechsota.ai/master/docs/Hub500.md' },
  { name: 'Mozilla Common Voice', source: 'https://raw.githubusercontent.com/zcaceres/speechsota.ai/master/docs/Mozilla-Common-Voice.md' },
]


class App extends Component {
  state = { selected: 0 }

  selectSource = (selected) => this.setState({ selected })

  render() {
    const { selected } = this.state
    return (
      <Container>
        <Nav>
          {SOURCES.map((source, i) => <Link href="#" selected={i === this.state.selected} onClick={() => this.selectSource(i)}>{source.name}</Link>)}
        </Nav>
        <Body selected={selected}/>
      </Container>
    )
  }
}

const Link = styled.a`
  ${props => props.selected && css`
    border-left: 3px solid white;
    font-weight: bold;
  `}

`

export default App;
