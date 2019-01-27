import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

export default class RenderMarkdown extends Component {
  state = {
    doc: null
  }

  componentDidMount() {
    fetch(this.props.source)
      .then(res => res.text())
      .then(doc => this.setState({ doc }))
      .catch(console.error)
  }

  render() {
    return <ReactMarkdown source={this.state.doc} />
  }
}
