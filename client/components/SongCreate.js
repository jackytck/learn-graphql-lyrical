import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import query from '../queries/fetchSongs'
import mutation from '../queries/addSong'

class SongCreate extends Component {
  static propTypes = {
    mutate: PropTypes.func
  }

  state = {
    title: ''
  }
  _onSubmit = this.onSubmit.bind(this)

  onSubmit (event) {
    event.preventDefault()

    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/'))
  }

  render () {
    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this._onSubmit}>
          <label>Song Title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    )
  }
}

export default graphql(mutation)(SongCreate)
