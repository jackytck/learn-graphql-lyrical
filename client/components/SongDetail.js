import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import fetchSong from '../queries/fetchSongDetail'
import LyricCreate from './LyricCreate'

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
        <Link to='/'>Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate />
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail)
