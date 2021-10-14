import React from 'react'
import PropTypes from 'prop-types'
import './welcome-background.styles.scss'

const WelcomeBackground = ({ children }) => {
  return <div className="welcome-background">{children}</div>
}

// We declare propTypes so when something else is given React will trow an error
WelcomeBackground.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

// When props are not required you can set them here
WelcomeBackground.defaultProps = {}

export default WelcomeBackground
