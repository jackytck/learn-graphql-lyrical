import React, { Component, PropTypes } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SongList extends Component {
  render () {
    console.log('this.props.data', this.props.data)

    return (
      <div>
        SongList
      </div>
    )
  }
}

SongList.propTypes = {
  data: PropTypes.object
}

const query = gql`
  {
    songs {
      title
    }
  }
`

export default graphql(query)(SongList)
