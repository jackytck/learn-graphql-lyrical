import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import mutation from '../queries/addLyricToSong'

class LyricCreate extends Component {
  static propTypes = {
    mutate: PropTypes.func,
    songId: PropTypes.string
  }

  state = {
    content: ''
  }

  _onSubmit = this.onSubmit.bind(this)

  onSubmit (event) {
    event.preventDefault()

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({ content: '' }))
  }

  render () {
    return (
      <form onSubmit={this._onSubmit}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    )
  }
}

export default graphql(mutation)(LyricCreate)
