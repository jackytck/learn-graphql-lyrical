import React, { Component, PropTypes } from 'react'

class LyricCreate extends Component {
  static propTypes = {
    // data: PropTypes.shape({
    //   loading: PropTypes.boolean,
    //   song: PropTypes.object
    // })
  }

  state = {
    content: ''
  }

  _onSubmit = this.onSubmit.bind(this)

  onSubmit (event) {
    event.preventDefault()
    console.log(this.state.content)
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

export default LyricCreate
