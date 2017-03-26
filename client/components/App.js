import React, { PropTypes } from 'react'

const App = ({ children }) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default App
