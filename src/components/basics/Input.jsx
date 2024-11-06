
import PropTypes from 'prop-types'

function Input({type, placeholder, name}) {
  return (
    <input type={type} placeholder={placeholder} name={name}></input>
  )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string
}

export default Input
