import React, { Component, PropTypes } from 'react'

class LyricList extends Component {
  static propTypes = {
    lyrics: PropTypes.array
  }

  onLike (id) {
    console.log(id)
  }

  renderLyrics () {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className='collection-item'>
          {content}
          <i
            className='material-icons'
            onClick={() => this.onLike(id)}
          >
            thumb_up
          </i>
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
