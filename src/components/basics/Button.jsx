import PropTypes from 'prop-types'

function Button({type}) {
  return (
    <button className='button' type={type}></button>
  )
}

Button.propTypes = {
    type : PropTypes.string.isRequired,
}

export default Button
