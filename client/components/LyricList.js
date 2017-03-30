import React, { Component, PropTypes } from 'react'

class LyricList extends Component {
  static propTypes = {
    lyrics: PropTypes.array
  }

  renderLyrics () {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className='collection-item'>
          {content}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className='collection'>
        {this.renderLyrics()}
      </ul>
    )
  }
}

export default LyricList
