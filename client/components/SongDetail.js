import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import fetchSong from '../queries/fetchSongDetail'

class SongDetail extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.boolean,
      song: PropTypes.object
    })
  }

  render () {
    if (this.props.data.loading) {
      return (
        <div>Loading...</div>
      )
    }
    const { song } = this.props.data

    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail)
