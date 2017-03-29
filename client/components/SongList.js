import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/fetchSongs'
import mutation from '../queries/deleteSong'

class SongList extends Component {
  onSongDelete (id) {
    console.log(id)
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch())
  }

  renderSongs () {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className='collection-item'>
          <Link to={`songs/${id}`}>
            {title}
          </Link>
          <i
            className='material-icons'
            onClick={() => this.onSongDelete(id)}
          >
            delete
          </i>
        </li>
      )
    })
  }

  render () {
    if (this.props.data.loading) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <ul className='collection'>
          {this.renderSongs()}
        </ul>
        <Link
          to='/songs/new'
          className='btn-floating btn-large red right'
        >
          <i className='material-icons'>add</i>
        </Link>
      </div>
    )
  }
}

SongList.propTypes = {
  data: PropTypes.object,
  mutate: PropTypes.func
}

export default graphql(mutation)(
  graphql(query)(SongList)
)
