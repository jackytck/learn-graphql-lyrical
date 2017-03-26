import React, { Component, PropTypes } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SongCreate extends Component {
  render () {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form />
      </div>
    )
  }
}

SongCreate.propTypes = {
  data: PropTypes.object
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default graphql(query)(SongCreate)
