import PropTypes from 'prop-types'

function Button({type}) {
  return (
    <button className='button-search' type={type}></button>
  )
}

Button.propTypes = {
    type : PropTypes.string.isRequired,
}

export default Button
