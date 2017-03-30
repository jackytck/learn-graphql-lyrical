import React, { Component, PropTypes } from 'react'
// import { graphql } from 'react-apollo'

class LyricList extends Component {
  static propTypes = {
    mutate: PropTypes.func,
    songId: PropTypes.string
  }

  state = {
    content: ''
  }

  // _onSubmit = this.onSubmit.bind(this)
  //
  // onSubmit (event) {
  //   event.preventDefault()
  //
  //   this.props.mutate({
  //     variables: {
  //       content: this.state.content,
  //       songId: this.props.songId
  //     }
  //   }).then(() => this.setState({ content: '' }))
  // }

  render () {
    return (
      <ul>
        LyricList
      </ul>
    )
  }
}

// export default graphql(mutation)(LyricList)
export default LyricList
